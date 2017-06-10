namespace Alten.VehiclesConnect.Data.Repositories
{
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Dynamic;

    using AutoMapper.QueryableExtensions;

    public class Repository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        #region Fields

        private readonly DbContext _dbContext;

        #endregion Fields

        #region Constructors

        public Repository(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        #endregion Constructors

        #region Properties

        private DbSet<TEntity> DbSet
        {
            get
            {
                return _dbContext.Set<TEntity>();
            }
        }

        #endregion Properties

        #region Methods

        #region Delete 

        public void Delete(Query<TEntity> query)
        {
            DbSet.RemoveRange(DbSet.Where(query.Expression));
        }

        public void Delete<TKey>(TKey id)
        {
            DbSet.Remove(DbSet.Find(id));
        }

        #endregion 

        #region Insert 

        public void Insert(IEnumerable<TEntity> entities)
        {
            DbSet.AddRange(entities);
        }

        public void Insert(TEntity entity)
        {
            DbSet.Add(entity);
        }

        #endregion 

        #region Select 

        public IEnumerable<TEntity> Select(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(query, pageSize, pageIndex, sortExression).AsEnumerable();
        }

        public IEnumerable<TProjectedEntity> Select<TProjectedEntity>(Query<TEntity> query, int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(query, pageSize, pageIndex, sortExression).ProjectTo<TProjectedEntity>().AsEnumerable();
        }

        public IEnumerable<TEntity> SelectAll(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(null, pageSize, pageIndex, sortExression).AsEnumerable();
        }

        public IEnumerable<TProjectedEntity> SelectAll<TProjectedEntity>(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(null, pageSize, pageIndex, sortExression).ProjectTo<TProjectedEntity>().AsEnumerable();
        }

        private IQueryable<TEntity> SelectQuery(Query<TEntity> where, int pageSize, int pageIndex, string sortExression)
        {
            IQueryable<TEntity> query = this.DbSet;
            if (where != null)
                query = query.Where(where.Expression);
            query = query.Skip(pageSize * pageIndex).Take(pageSize);
            if (sortExression != null)
                query = query.OrderBy(sortExression);
            return query;
        }

        #endregion 

        #endregion Methods
    }
}