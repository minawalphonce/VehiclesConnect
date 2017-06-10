using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(Alten.VehiclesConnect.Web.Startup))]

namespace Alten.VehiclesConnect.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfig = new HttpConfiguration();
            WebApiConfig.Register(httpConfig);

            app.UseWebApi(httpConfig);
        }
    }
}
