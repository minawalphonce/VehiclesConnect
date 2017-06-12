namespace Alten.VehiclesConnect.Data.Migrations
{
    using Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;

    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Alten.VehiclesConnect.Data.DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Alten.VehiclesConnect.Data.DatabaseContext context)
        {

            Customer[] customers = new Customer[]
            {
                new Customer() { Name = "Kalles Grustransporter AB", Address = "Cementvägen 8, 111 11 Södertälje" },
                new Customer() { Name = "Johans Bulk AB", Address = "Balkvägen 12, 222 22 Stockholm" },
                new Customer() { Name = "Haralds Värdetransporter AB", Address = "Budgetvägen 1, 333 33 Uppsala" }
            };
            context.Set<Customer>().AddOrUpdate(c => c.Name, customers);

            Vehicle[] vehicles = new Vehicle[]
            {
                new Vehicle() { Vin = "YS2R4X20005399401", RegistrationNumber = "ABC123", Customer = customers[0] },
                new Vehicle() { Vin = "VLUR4X20009093588", RegistrationNumber = "DEF456", Customer = customers[0] },
                new Vehicle() { Vin = "VLUR4X20009048066", RegistrationNumber = "GHI789", Customer = customers[0] },

                new Vehicle() { Vin = "YS2R4X20005388011", RegistrationNumber = "JKL012", Customer = customers[1] },
                new Vehicle() { Vin = "YS2R4X20005387949", RegistrationNumber = "MNO345", Customer = customers[1] },

                new Vehicle() { Vin = "YS2R4X20005387765", RegistrationNumber = "PQR678", Customer = customers[2] },
                new Vehicle() { Vin = "YS2R4X20005387055", RegistrationNumber = "STU901", Customer = customers[2] },
            };
            context.Set<Vehicle>().AddOrUpdate(v => v.Vin, vehicles);

            context.SaveChanges();
        }
    }
}
