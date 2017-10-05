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
            AutomapperConfig.Register();
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
        public void FindVehicles_ShowConnectedOnly_ReturnVehiclesWithStatus()
        {
            // Arrange
            this._vehiclesList[0].LastUpdatedStatus = DateTime.Now;
            var expectedValues = Mapper.Map<List<VehicleDto>>(new List<Vehicle> { this._vehiclesList[0] });

            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()
            {
                ShowConnectedOnly = true
            }) as OkNegotiatedContentResult<IEnumerable<VehicleDto>>;

            // Assert
            Assert.IsNotNull(result, "result is not OK 200");
            CollectionAssert.AreEqual(expectedValues, result.Content.ToList());
        }

        [TestMethod]
        public void FindVehicles_ShowDisconnectedOnly_ReturnVehiclesWithoutStatus()
        {
            // Arrange
            this._vehiclesList[0].LastUpdatedStatus = DateTime.Now;
            var expectedValues = Mapper.Map<List<VehicleDto>>(this._vehiclesList.Skip(1));

            // Act
            var result = _controller.FindVehicles(new FindVehicleFilter()
            {
                ShowConnectedOnly = false
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
            var moqUnitOfWorkFactory = new Mock<IUnitOfWorkFactory>();
            var vehiclesRepository = new ListRepository<Vehicle>(this._vehiclesList);
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
                new Vehicle() { Id = 1, Vin = "YS2R4X20005399401", RegistrationNumber = "ABC123", Customer = _customersList.ElementAt(0) },
                new Vehicle() { Id = 2, Vin = "VLUR4X20009093588", RegistrationNumber = "DEF456", Customer = _customersList.ElementAt(0) },
                new Vehicle() { Id = 3, Vin = "VLUR4X20009048066", RegistrationNumber = "GHI789", Customer = _customersList.ElementAt(0) },
                new Vehicle() { Id = 4, Vin = "YS2R4X20005388011", RegistrationNumber = "JKL012", Customer = _customersList.ElementAt(1) },
                new Vehicle() { Id = 5, Vin = "YS2R4X20005387949", RegistrationNumber = "MNO345", Customer = _customersList.ElementAt(1) },
                new Vehicle() { Id = 6, Vin = "YS2R4X20005387765", RegistrationNumber = "PQR678", Customer = _customersList.ElementAt(2) },
                new Vehicle() { Id = 7, Vin = "YS2R4X20005387055", RegistrationNumber = "STU901", Customer = _customersList.ElementAt(2) },
            };
        }

        #endregion Methods
    }
}