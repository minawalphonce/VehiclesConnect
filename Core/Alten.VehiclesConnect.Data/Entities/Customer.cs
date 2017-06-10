using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Data.Entities
{
    public class Customer : BaseEntity
    {
        public string Name { set; get; }

        public string Address { set; get; }
    }
}
