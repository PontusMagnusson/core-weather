using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClimaMundi.Core.Models
{
    public class GeocodeResponse
    {
        [JsonProperty(PropertyName = "query")]
        public string[] Query { get; set; }

        [JsonProperty(PropertyName = "features")]
        public IEnumerable<Feature> Features { get; set; }
    }
}
