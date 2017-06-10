using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Data.Entities
{
    public class Vehicle : BaseEntity
    {
        public string Vin { set; get; }
        public string RegistrationNumber { set; get; }
        public int CustomerId { set; get; }
        public virtual Customer Customer { set; get; }
    }
}
