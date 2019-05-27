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
            _apiKey = apiKey;
        }

        public async Task<Response> GetWeatherByCoordinates(double latitude, double longitude)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                string requestUri = CreateRequestUri(latitude, longitude);
                Forecast forecast = null;
                try
                {
                    var result = await client.GetAsync(requestUri);
                    string jsonResult =  await result.Content.ReadAsStringAsync();
                    forecast = JsonConvert.DeserializeObject<Forecast>(jsonResult);
                }
                catch (HttpRequestException ex)
                {
                    Log.Error(ex, "Http request failed");
                }

                // Map the values to our own viewmodel, so we can format the values here instead of the browser
                Response response = new Response()
                {
                    Currently = new CurrentlyViewModel()
                    {
                        Icon = forecast.Currently.Icon.ToString(),
                        Temperature = Math.Round(forecast.Currently.Temperature.Value, 1),
                        Humidity = (forecast.Currently.Humidity * 100),
                        DailyHigh = Math.Round(forecast.Daily.Data.First().TemperatureHigh.Value, 1),
                        DailyLow = Math.Round(forecast.Daily.Data.First().TemperatureLow.Value, 1),
                        Summary = forecast.Hourly.Data.First().Summary,
                        TemperatureUnit = 'C'
                    }
                };

                return response;
            }
        }

        public async Task<Response> GetWeatherByLocation(string locaion)
        {
            throw new NotImplementedException();
        }


        string CreateRequestUri(double latitude, double longitude)
        {
            StringBuilder stringBuilder = new StringBuilder(FormattableString.Invariant($"forecast/{_apiKey}/{latitude:N4},{longitude:N4}?units=si"));

            return stringBuilder.ToString();
        }
    }
}
