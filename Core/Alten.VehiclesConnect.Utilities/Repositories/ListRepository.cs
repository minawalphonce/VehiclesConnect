using AutoMapper;
using AutoMapper.QueryableExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Utilities.Repositories
{
    public class ListRepository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        private IList<TEntity> DataSource { get; set; }
        public ListRepository(IList<TEntity> dataSource)
        {
            this.DataSource = dataSource;
        }

        #region Methods

        #region Delete 

        public void Delete(TEntity entity)
        {
            DataSource.Remove(entity);
        }

        public void Delete(Query<TEntity> query)
        {
            foreach (var entity in this.DataSource.AsQueryable().Where(query.Expression))
            {
                DataSource.Remove(entity);
            }

        }

        #endregion 

        #region Insert 

        public void Insert(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
                DataSource.Add(entity);
        }

        public void Insert(TEntity entity)
        {
            DataSource.Add(entity);
        }

        #endregion 

        #region Select 

        public IEnumerable<TEntity> Select(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(query, pageSize, pageIndex, sortExression).AsEnumerable();
        }

        public IEnumerable<TProjectedEntity> Select<TProjectedEntity>(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            var lst = this.SelectQuery(query, pageSize, pageIndex, sortExression).ToList();
            return Mapper.Map<List<TProjectedEntity>>(lst);
        }

        public IEnumerable<TEntity> SelectAll(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(null, pageSize, pageIndex, sortExression).AsEnumerable();
        }

        public IEnumerable<TProjectedEntity> SelectAll<TProjectedEntity>(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return Mapper.Map<List<TProjectedEntity>>(this.SelectQuery(null, pageSize, pageIndex, sortExression).ProjectTo<TProjectedEntity>().AsEnumerable());
        }

        private IQueryable<TEntity> SelectQuery(Query<TEntity> where, int pageSize, int pageIndex, string sortExression)
        {
            IQueryable<TEntity> query = this.DataSource.AsQueryable();
            if (where != null)
                query = query.Where(where.Expression);
            if (sortExression != null)
                query = query.OrderBy(sortExression).Skip(pageSize * pageIndex).Take(pageSize);
            return query;
        }

        #endregion 

        #endregion Methods
    }
}
