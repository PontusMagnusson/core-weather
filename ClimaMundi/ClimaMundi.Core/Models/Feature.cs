using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace ClimaMundi.Core.Models
{
    /// <summary>
    /// Model representing a location Feature returned from Mapbox.
    /// This model is incomplete, and only contains the data relevant to the project.
    /// </summary>
    public class Feature
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "place_name")]
        public string PlaceName { get; set; }

        [JsonProperty(PropertyName = "center")]
        public double[] Center { get; set; }
    }
}
