using Alten.VehiclesConnect.Web.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace Alten.VehiclesConnect.Web.Controllers
{
    [RoutePrefix("api/vehicles")]
    public class VehiclesController : ApiController
    {
        [Route]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<VehicleDto>))]
        public IHttpActionResult FindVehicles([FromUri]FindVehiclelFilterRequest filter)
        {
            return Ok();
        }

        [Route("{id}")]
        [HttpGet]
        [ResponseType(typeof(VehicleDto))]
        public IHttpActionResult FindVehicleById(int id)
        {
            return Ok();
        }

        [Route("{id}/ping")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PingVehicle(int id)
        {
            return Ok();
        }
    }
}
