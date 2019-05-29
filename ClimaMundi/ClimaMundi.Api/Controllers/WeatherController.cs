using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClimaMundi.Api.Services;

namespace ClimaMundi.Api.Controllers
{
    /// <summary>
    /// Get the weather for any location
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        WeatherService _weatherService;

        public WeatherController()
        {
            string apiKey = Environment.GetEnvironmentVariable("DarkSkyApiKey");
            _weatherService = new WeatherService(apiKey); // Make this an interface later
        }

        /// <summary>
        /// Get the weather for a location specified by a coordinate pair
        /// </summary>
        /// <param name="latitude">The positions latitude</param>
        /// <param name="longitude">The positions longitude</param>
        /// <returns></returns>
        [HttpGet("{latitude},{longitude}")]
        public async Task<IActionResult> GetByCoordinates(double latitude, double longitude)
        {
            return Ok(await _weatherService.GetWeatherByCoordinates(latitude, longitude));
        }

        /// <summary>
        /// Get the weather for a location by a text search, picks the most relevant location based on the search.
        /// </summary>
        /// <param name="location">The location name</param>
        /// <returns></returns>
        [HttpGet("{location}")]
        public async Task<IActionResult> GetByLocation(string location)
        {
            return Ok(await _weatherService.GetWeatherByLocation(location));
        }
    }
}