using Alten.VehiclesConnect.Data.Entities;
using Alten.VehiclesConnect.Utilities.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Data.Queries.Vehicles
{
    public class ByCustomerIdAndStatus : Query<Vehicle>
    {
        public ByCustomerIdAndStatus(int? customerId, bool? showConnectedOnly)
        {
            this.Expression = v => true;
            if (customerId.HasValue)
                this.Expression = this.Expression.And(v => v.CustomerId == customerId);
            if (showConnectedOnly.HasValue)
            {
                if (!showConnectedOnly.Value)
                {
                    this.Expression = this.Expression.And(v => v.LastUpdatedStatus == null || DbFunctions.DiffSeconds(v.LastUpdatedStatus, DateTime.UtcNow) > 60);
                }
                else
                {
                    this.Expression = this.Expression.And(v => DbFunctions.DiffSeconds(v.LastUpdatedStatus, DateTime.UtcNow) < 60);
                }
            }
        }
    }
}
