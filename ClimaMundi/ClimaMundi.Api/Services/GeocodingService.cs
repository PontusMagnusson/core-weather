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

        public async Task<GeocodeResponse> ReverseGeocodeAsync(double latitude, double longitude)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                GeocodeResponse geocodeResponse = null;

                try
                {
                    string requestUri = CreateRequestUri(latitude, longitude);
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

        public async Task<GeocodeResponse> ForwardGeocodeAsync(string location)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;
                GeocodeResponse response = null;

                try
                {
                    string requestUri = CreateRequestUri(location);
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
            StringBuilder builder = new StringBuilder(Invariant($"/geocoding/v5/mapbox.places/{location}.json?access_token={_apiKey}"));

            return builder.ToString();
        }
    }
}
