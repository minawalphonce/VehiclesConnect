namespace Alten.VehiclesConnect.Web.Tests
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Web.Http.Results;

    using Alten.VehiclesConnect.Data.Entities;
    using Alten.VehiclesConnect.Data.Queries.Vehicles;
    using Alten.VehiclesConnect.Utilities.Repositories;
    using Alten.VehiclesConnect.Web.Controllers;
    using Alten.VehiclesConnect.Web.Models;

    using AutoMapper;

    using Microsoft.VisualStudio.TestTools.UnitTesting;

    using Moq;

    [TestClass]
    public class VehiclesControllerTest
    {
        public VehiclesControllerTest()
        {
            InitializeAutoMapper();
            InitilizeTestData();
        }

        #region Fields

        private VehiclesController _controller;
        private List<Customer> _customersList;
        private List<Vehicle> _vehiclesList;

        #endregion Fields

        #region Methods

        [TestMethod]
        public void FindVehicles_NullParams_ReturnAll()
        {
            // Arrange
            var expectedValues = Mapper.Map<List<VehicleDto>>(this._vehiclesList);

            // Act
            var result = _controller.FindVehicles(null) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            CollectionAssert.AreEqual(expectedValues, result.Content.ToList());
        }

        [TestMethod]
        public void FindVehicles_EmptyParams_ReturnAll()
        {
            // Arrange
            var expectedValues = Mapper.Map<List<VehicleDto>>(this._vehiclesList);

            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            CollectionAssert.AreEqual(expectedValues, result.Content.ToList());
        }

        [TestMethod]
        public void FindVehicles_InValidCustomId_ReturnNoResult()
        {
            // Arrange

            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()
            {
                CustomerId = -1
            }) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            Assert.AreEqual(0, result.Content.Count());
        }

        [TestMethod]
        public void FindVehicles_InvalidSorting_ReturnNoSorting()
        {
            // Arrange
            var sortExpression = "invalid sorting";
            var expectedValues = Mapper.Map<List<VehicleDto>>(this._vehiclesList);
            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()
            {
                SortExpression = sortExpression
            }) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            CollectionAssert.AreEqual(expectedValues, result.Content.ToList());
        }

        [TestMethod]
        public void FindVehicles_ValidCustomId_ReturnAll()
        {
            // Arrange
            var customerId = 1;
            var expectedValues = Mapper.Map<List<VehicleDto>>(this._vehiclesList);

            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()
            {
                CustomerId = customerId
            }) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            CollectionAssert.AreEqual(expectedValues, result.Content.ToList());
        }

        [TestInitialize]
        public void InitializeSingleTest()
        {
            var vehicles = this._vehiclesList.AsQueryable();

            var vehiclesMock = new Mock<DbSet<Vehicle>>();
            vehiclesMock.As<IQueryable<Vehicle>>().Setup(m => m.Provider).Returns(vehicles.Provider);
            vehiclesMock.As<IQueryable<Vehicle>>().Setup(m => m.Expression).Returns(vehicles.Expression);
            vehiclesMock.As<IQueryable<Vehicle>>().Setup(m => m.ElementType).Returns(vehicles.ElementType);
            vehiclesMock.As<IQueryable<Vehicle>>().Setup(m => m.GetEnumerator()).Returns(vehicles.GetEnumerator());

            var moqUnitOfWorkFactory = new Mock<IUnitOfWorkFactory>();
            var vehiclesRepository = new DbSetRepository<Vehicle>(vehiclesMock.Object, true);
            this._controller = new VehiclesController(vehiclesRepository, moqUnitOfWorkFactory.Object);
        }

        private void InitilizeTestData()
        {
            _customersList = new List<Customer>
            {
                new Customer() { Name = "Kalles Grustransporter AB", Address = "Cementvägen 8, 111 11 Södertälje", Id= 1 },
                new Customer() { Name = "Johans Bulk AB", Address = "Balkvägen 12, 222 22 Stockholm", Id = 2 },
                new Customer() { Name = "Haralds Värdetransporter AB", Address = "Budgetvägen 1, 333 33 Uppsala", Id = 3 }
            };

            _vehiclesList = new List<Vehicle>
            {
                new Vehicle() { CustomerId = 1, Id = 1, Vin = "YS2R4X20005399401", RegistrationNumber = "ABC123", Customer = _customersList.ElementAt(0) },
                new Vehicle() { CustomerId = 1, Id = 2, Vin = "VLUR4X20009093588", RegistrationNumber = "DEF456", Customer = _customersList.ElementAt(0) },
                new Vehicle() { CustomerId = 1, Id = 3, Vin = "VLUR4X20009048066", RegistrationNumber = "GHI789", Customer = _customersList.ElementAt(0) },
                new Vehicle() { CustomerId = 1, Id = 4, Vin = "YS2R4X20005388011", RegistrationNumber = "JKL012", Customer = _customersList.ElementAt(1) },
                new Vehicle() { CustomerId = 1, Id = 5, Vin = "YS2R4X20005387949", RegistrationNumber = "MNO345", Customer = _customersList.ElementAt(1) },
                new Vehicle() { CustomerId = 1, Id = 6, Vin = "YS2R4X20005387765", RegistrationNumber = "PQR678", Customer = _customersList.ElementAt(2) },
                new Vehicle() { CustomerId = 1, Id = 7, Vin = "YS2R4X20005387055", RegistrationNumber = "STU901", Customer = _customersList.ElementAt(2) },
            };
        }
        private void InitializeAutoMapper()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<Vehicle, VehicleDto>()
                    .ForMember(v => v.Customer, cfg => cfg.MapFrom(v => v.Customer.Name))
                    .ForMember(v => v.IsConnected, cfg => cfg.MapFrom(v => v.LastUpdatedStatus.HasValue && ((v.LastUpdatedStatus - DateTime.UtcNow).Value.Seconds < 60)));

                config.CreateMap<Customer, CustomerDto>();
            });
        }
        #endregion Methods
    }
}