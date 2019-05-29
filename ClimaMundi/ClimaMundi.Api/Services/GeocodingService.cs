using ClimaMundi.Core.Models;
using Newtonsoft.Json;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using static System.FormattableString;

namespace ClimaMundi.Api.Services
{
    public class GeocodingService
    {
        private readonly string _apiKey;
        private readonly Uri _baseUri = new Uri("https://api.mapbox.com");

        public GeocodingService(string apiKey)
        {
            if (string.IsNullOrWhiteSpace(apiKey))
            {
                throw new ArgumentNullException(nameof(apiKey), "API key cannot be null");
            }

            _apiKey = apiKey;
        }

        /// <summary>
        /// Gets readable location data for a set of coordinates. Selects the most detailed location available.
        /// </summary>
        /// <param name="latitude"></param>
        /// <param name="longitude"></param>
        /// <returns></returns>
        public async Task<GeocodeResponse> ReverseGeocodeAsync(double latitude, double longitude)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                GeocodeResponse geocodeResponse = null;

                try
                {
                    string requestUri = CreateRequestUri(latitude, longitude);

                    Log.Information("Sending request to {RequestUri} at {BaseUri}", requestUri, _baseUri);

                    var response = await client.GetAsync(requestUri);
                    string jsonResult = await response.Content.ReadAsStringAsync();
                    geocodeResponse = JsonConvert.DeserializeObject<GeocodeResponse>(jsonResult, new JsonSerializerSettings { MissingMemberHandling = MissingMemberHandling.Ignore });
                }
                catch (HttpRequestException ex)
                {
                    Log.Error(ex, "HttpRequest failed");
                }

                return await Task.FromResult(geocodeResponse);
            }
        }

        /// <summary>
        /// Gets the most relevant location based on a search string.
        /// </summary>
        /// <param name="location"></param>
        /// <returns></returns>
        public async Task<GeocodeResponse> ForwardGeocodeAsync(string location)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                GeocodeResponse response = null;

                try
                {
                    string requestUri = CreateRequestUri(location);

                    Log.Information("Sending request to {RequestUri} at {BaseUri}", requestUri, _baseUri);

                    var httpResponse = await client.GetAsync(requestUri);
                    string jsonResult = await httpResponse.Content.ReadAsStringAsync();

                    response = JsonConvert.DeserializeObject<GeocodeResponse>(jsonResult, new JsonSerializerSettings { MissingMemberHandling = MissingMemberHandling.Ignore });
                }
                catch (Exception ex)
                {
                    Log.Error(ex, "HttpRequest failed");
                }

                return await Task.FromResult(response);
            }
        }

        private string CreateRequestUri(double latitude, double longitude)
        {
            // Since the uri is pretty much the same we can just reuse the other builder
            return CreateRequestUri(Invariant($"{longitude},{latitude}"));
        }

        private string CreateRequestUri(string location)
        {
            StringBuilder builder = new StringBuilder(Invariant($"/geocoding/v5/mapbox.places/{location}.json?access_token={_apiKey}&types=place"));

            return builder.ToString();
        }
    }
}
