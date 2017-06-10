using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Data.Repositories
{
    public class Query<TEntity>
        where TEntity : class
    {
        protected internal Expression<Func<TEntity,bool>> Expression { set; get; }
    }
}
