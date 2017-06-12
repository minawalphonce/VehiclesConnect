using Alten.VehiclesConnect.Data.Entities;
using Alten.VehiclesConnect.Utilities.Repositories;
using Alten.VehiclesConnect.Web.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;
using System.Linq;
using System;
using Alten.VehiclesConnect.Data.Queries.Vehicles;

namespace Alten.VehiclesConnect.Web.Controllers
{
    [RoutePrefix("api/vehicles")]
    public class VehiclesController : ApiController
    {
        private readonly IRepository<Vehicle> _vehicleRepository;
        private readonly IUnitOfWorkFactory _unitOfWorkFactory;
        public VehiclesController(IRepository<Vehicle> vehicleRepository, IUnitOfWorkFactory unitOfWorkFactory)
        {
            _vehicleRepository = vehicleRepository;
            _unitOfWorkFactory = unitOfWorkFactory;
        }

        [Route]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<VehicleDto>))]
        public IHttpActionResult FindVehicles([FromUri]FindVehicleFilter filter)
        {
            if (filter == null)
                filter = new FindVehicleFilter();

            return Ok(_vehicleRepository.Select<VehicleDto>(new ByCustomerIdAndStatus(filter.CustomerId, filter.ShowConnectedOnly)));
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
            using (_unitOfWorkFactory.Create())
            {
                var vehicle = _vehicleRepository.Select(new Query<Vehicle>(v => v.Id == id)).SingleOrDefault();
                if (vehicle == null)
                    return NotFound();
                vehicle.LastUpdatedStatus = DateTime.UtcNow;
            }
            return Ok();
        }
    }
}
