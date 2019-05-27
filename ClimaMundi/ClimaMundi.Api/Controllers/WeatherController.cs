using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClimaMundi.Api.Services;

namespace ClimaMundi.Api.Controllers
{
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


        [HttpGet("{latitude},{longitude}")]
        public async Task<IActionResult> GetByCoordinates(double latitude, double longitude)
        {
            return Ok(await _weatherService.GetWeatherByCoordinates(latitude, longitude));
        }

        [HttpGet("{location}")]
        public string GetByLocation(string location)
        {
            throw new NotImplementedException();
        }
    }
}