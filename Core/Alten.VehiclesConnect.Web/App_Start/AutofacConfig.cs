using Alten.VehiclesConnect.Data;
using Alten.VehiclesConnect.Utilities.Repositories;
using Autofac;
using Autofac.Integration.WebApi;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Alten.VehiclesConnect.Web
{
    public static class AutofacConfig
    {
        public static void Register(out IContainer container)
        {
            ContainerBuilder builder = new ContainerBuilder();
            builder.RegisterApiControllers(typeof(AutofacConfig).Assembly);

            builder.RegisterGeneric(typeof(DbSetRepository<>)).As(typeof(IRepository<>)).UsingConstructor(typeof(DbContext)).InstancePerRequest();
            builder.RegisterType<UnitOfWorkFactory>().As<IUnitOfWorkFactory>().InstancePerRequest();
            builder.RegisterType<DatabaseContext>().As<DbContext>().InstancePerRequest();

            container = builder.Build();
        }
    }
}