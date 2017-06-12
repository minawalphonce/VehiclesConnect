using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Alten.VehiclesConnect.Web.Models
{
    public class VehicleDto
    {
        public int Id { set; get; }
        public string Vin { set; get; }
        public string RegistrationNumber { set; get; }

        public string Customer { set; get; }
        public bool? IsConnected { set; get; }
    }
}