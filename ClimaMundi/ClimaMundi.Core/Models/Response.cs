using System;
using System.Collections.Generic;
using System.Text;

namespace ClimaMundi.Core.Models
{
    public class Response
    {
        public string Error { get; set; }

        public int Status { get; set; }

        public CurrentlyViewModel Currently { get; set; }
    }
}
