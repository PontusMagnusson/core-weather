using System;
using System.Collections.Generic;
using System.Text;

namespace ClimaMundi.Core.Models
{
    public class DailyViewModel
    {
        public double? DailyHigh { get; set; }

        public double? DailyLow { get; set; }

        public double? Humidity { get; set; }

        public string Summary { get; set; }

        public DateTime Date { get; set; }

        public string FormattedDateString { get; set; }
    }
}
