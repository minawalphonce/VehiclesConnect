using Alten.VehiclesConnect.Data.Entities;
using Alten.VehiclesConnect.Utilities.Repositories;
using Alten.VehiclesConnect.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace Alten.VehiclesConnect.Web.Controllers
{
    [RoutePrefix("api/customers")]
    public class CustomersController : ApiController
    {
        private readonly IRepository<Customer> _customersRepository;
        public CustomersController(IRepository<Customer> customersRepository)
        {
            _customersRepository = customersRepository;
        }

        [Route]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<CustomerDto>))]
        public IHttpActionResult GetCustomers()
        {
            return Ok(_customersRepository.SelectAll<CustomerDto>());
        }
    }
}
