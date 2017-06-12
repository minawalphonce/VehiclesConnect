using System;
using System.Linq.Expressions;

namespace Alten.VehiclesConnect.Utilities.Repositories
{
    public class Query<TEntity>
        where TEntity : class
    {
        public Query()
        {

        }
        public Query(Expression<Func<TEntity, bool>> where)
        {
            this.Expression = where;
        }

        protected internal Expression<Func<TEntity,bool>> Expression { set; get; }
    }
}
