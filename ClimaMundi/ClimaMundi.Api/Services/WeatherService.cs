using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text;
using Serilog;
using DarkSky.Models;
using Newtonsoft.Json;
using ClimaMundi.Core.Models;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.Globalization;

namespace ClimaMundi.Api.Services
{

    /// <summary>
    /// Service targeting the DarkSky API. Uses models from the DarkSky Core wrapper, but not the service provided there.
    /// </summary>
    public class WeatherService
    {
        private readonly string _apiKey;
        private readonly Uri _baseUri = new Uri("https://api.darksky.net");

        public WeatherService(string apiKey)
        {
            if (string.IsNullOrWhiteSpace(apiKey))
            {
                throw new ArgumentNullException(nameof(apiKey), "API key cannot be null");
            }

            _apiKey = apiKey;
        }

        public async Task<WeatherResponse> GetWeatherByCoordinates(double latitude, double longitude, string placeName = "")
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                string requestUri = CreateRequestUri(latitude, longitude);
                Forecast forecast = null;
                try
                {
                    Log.Information("Sending request to {RequestUri} at {BaseUri}", requestUri, _baseUri);

                    var result = await client.GetAsync(requestUri);
                    string jsonResult =  await result.Content.ReadAsStringAsync();
                    forecast = JsonConvert.DeserializeObject<Forecast>(jsonResult);
                }
                catch (HttpRequestException ex)
                {
                    Log.Error(ex, "Http request failed");
                }

                if (string.IsNullOrWhiteSpace(placeName))
                {
                    string apiKey = Environment.GetEnvironmentVariable("MapBoxApiKey");
                    GeocodingService geocodingService = new GeocodingService(apiKey);

                    GeocodeResponse geocodeResponse = await geocodingService.ReverseGeocodeAsync(latitude, longitude);

                    placeName = geocodeResponse.Features.First().PlaceName;
                }

                // Map the values to our own viewmodel, so we can format the values here instead of the browser
                WeatherResponse response = new WeatherResponse()
                {
                    Currently = new CurrentlyViewModel()
                    {
                        Location = placeName,
                        Icon = forecast.Currently.Icon.ToString(),
                        Temperature = Math.Round(forecast.Currently.Temperature.Value, 1),
                        Humidity = Math.Round(forecast.Currently.Humidity.Value * 100),
                        DailyHigh = Math.Round(forecast.Daily.Data.First().TemperatureHigh.Value, 1),
                        DailyLow = Math.Round(forecast.Daily.Data.First().TemperatureLow.Value, 1),
                        Summary = forecast.Hourly.Data.First().Summary,
                        TemperatureUnit = 'C'
                    }
                };

                forecast.Daily.Data.ForEach((daily) =>
                {
                    response.Daily.Add(new DailyViewModel
                    {
                        Date = daily.DateTime.DateTime,
                        FormattedDateString = daily.DateTime.DateTime.ToString("YYYY-MM-dd", CultureInfo.InvariantCulture),
                        DailyHigh = daily.TemperatureHigh

                    });
                });

                return response;
            }
        }

        public async Task<WeatherResponse> GetWeatherByLocation(string location)
        {
            string apiKey = Environment.GetEnvironmentVariable("MapBoxApiKey");
            GeocodingService service = new GeocodingService(apiKey);

            GeocodeResponse result = await service.ForwardGeocodeAsync(location);

            WeatherResponse weatherResponse;

            if(result.Features.Count() == 0)
            {
                weatherResponse = new WeatherResponse()
                {
                    Error = "No locations found matching search query",
                    Status = 400
                };
            }
            else
            {
               weatherResponse = await GetWeatherByCoordinates(result.Features.First().Center[1], result.Features.First().Center[0], result.Features.First().PlaceName);
            }


            // Temporarily return empty response
            return await Task.FromResult(weatherResponse);
        }


        string CreateRequestUri(double latitude, double longitude)
        {
            StringBuilder stringBuilder = new StringBuilder(FormattableString.Invariant($"forecast/{_apiKey}/{latitude:N4},{longitude:N4}?units=si"));

            return stringBuilder.ToString();
        }
    }
}
