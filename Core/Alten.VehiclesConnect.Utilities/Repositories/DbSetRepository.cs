namespace Alten.VehiclesConnect.Utilities.Repositories
{
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Dynamic;

    using AutoMapper.QueryableExtensions;

    public class DbSetRepository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        #region Constructors

        public DbSetRepository(DbContext dbContext, bool doMapAfterExecute = false) : this(dbContext.Set<TEntity>(), doMapAfterExecute)
        {

        }

        public DbSetRepository(IDbSet<TEntity> dbSet, bool doMapAfterExecute = false)
        {
            this.DbSet = dbSet;
            this.DoMapAfterExecute = doMapAfterExecute;
        }

        #endregion Constructors

        #region Properties

        private IDbSet<TEntity> DbSet
        {
            set; get;
        }
        private bool DoMapAfterExecute { set; get; }

        #endregion Properties

        #region Methods

        #region Delete 

        public void Delete(TEntity entity)
        {
            DbSet.Remove(entity);
        }

        public void Delete(Query<TEntity> query)
        {
            foreach (var entity in this.DbSet.Where(query.Expression))
            {
                DbSet.Remove(entity);
            }

        }

        #endregion 

        #region Insert 

        public void Insert(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
                DbSet.Add(entity);
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
            var result = this.SelectQuery(query, pageSize, pageIndex, sortExression);
            if (this.DoMapAfterExecute)
                return AutoMapper.Mapper.Map<List<TProjectedEntity>>(result.ToList());
            return result.ProjectTo<TProjectedEntity>().AsEnumerable();
        }

        public IEnumerable<TEntity> SelectAll(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            return this.SelectQuery(null, pageSize, pageIndex, sortExression).AsEnumerable();
        }

        public IEnumerable<TProjectedEntity> SelectAll<TProjectedEntity>(int pageSize = int.MaxValue, int pageIndex = 0, string sortExression = null)
        {
            var result = this.SelectQuery(null, pageSize, pageIndex, sortExression);
            if (this.DoMapAfterExecute)
                return AutoMapper.Mapper.Map<List<TProjectedEntity>>(result.ToList());
            return result.ProjectTo<TProjectedEntity>().AsEnumerable();
        }

        private IQueryable<TEntity> SelectQuery(Query<TEntity> where, int pageSize, int pageIndex, string sortExression)
        {
            IQueryable<TEntity> query = this.DbSet.AsQueryable();
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