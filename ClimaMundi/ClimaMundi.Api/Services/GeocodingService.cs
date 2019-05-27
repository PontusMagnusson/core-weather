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
            _apiKey = apiKey;
        }

        public async Task<string> ReverseGeocode(double latitude, double longitude)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;

                try
                {
                    string requestUri = CreateRequestUri(latitude, longitude);
                    var response = await client.GetAsync(requestUri);

                }
                catch (HttpRequestException ex)
                {
                    Log.Error(ex, "HttpRequest failed");
                }

                return await Task.FromResult("");
            }
        }

        public async Task<string> ForwardGeocode(string location)
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = _baseUri;

                try
                {
                    string requestUri = CreateRequestUri(location);
                    var response = await client.GetAsync(requestUri);

                }
                catch (HttpRequestException ex)
                {
                    Log.Error(ex, "HttpRequest failed");
                }

                return await Task.FromResult("");
            }
        }

        private string CreateRequestUri(double latitude, double longitude)
        {
            // Since the uri is pretty much the same we can just reuse the other builder
            return CreateRequestUri(Invariant($"{latitude},{longitude}"));
        }

        private string CreateRequestUri(string location)
        {
            StringBuilder builder = new StringBuilder(Invariant($"/geocoding/v5/mapbox.places/{location}.json?access_token={_apiKey}"));

            return builder.ToString();
        }
    }
}
