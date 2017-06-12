using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Autofac;

[assembly: OwinStartup(typeof(Alten.VehiclesConnect.Web.Startup))]

namespace Alten.VehiclesConnect.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // definitions 
            HttpConfiguration httpConfig = new HttpConfiguration();
            IContainer container;
            
            // config 
            AutofacConfig.Register(out container);
            WebApiConfig.Register(httpConfig, container);
            AutomapperConfig.Register();
            // middlewares 
            app.UseWebApi(httpConfig);
        }
    }
}
