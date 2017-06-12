using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Utilities.Repositories
{
    public interface IRepository<TEntity>
        where TEntity : class
    {
        IEnumerable<TEntity> SelectAll(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null);
        IEnumerable<TProjectedEntity> SelectAll<TProjectedEntity>(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null);
        IEnumerable<TEntity> Select(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null);
        IEnumerable<TProjectedEntity> Select<TProjectedEntity>(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null);
        //----------------------------------------------------------------
        void Insert(TEntity entity);
        void Insert(IEnumerable<TEntity> entity);

        void Delete<TKey>(TKey id);
        void Delete(Query<TEntity> query);
    }
}
