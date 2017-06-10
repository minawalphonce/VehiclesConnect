using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Data.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _dbContext;

        public UnitOfWork(DbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Dispose()
        {
            Submit();
        }

        public void Submit()
        {
            this._dbContext.SaveChanges();
        }
    }
}
