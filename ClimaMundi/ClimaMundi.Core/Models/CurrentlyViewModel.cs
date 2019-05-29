using System;
using System.Collections.Generic;
using System.Text;

namespace ClimaMundi.Core.Models
{
    /// <summary>
    /// Current weather
    /// </summary>
    public class CurrentlyViewModel
    {
        public string Location { get; set; }

        public string Summary { get; set; }

        public char? TemperatureUnit { get; set; }

        public string Icon { get; set; }

        public double? Temperature { get; set; }

        public double? DailyHigh { get; set; }

        public double? DailyLow { get; set; }

        public double? Humidity { get; set; }
    }
}
