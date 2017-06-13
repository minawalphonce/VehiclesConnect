using Alten.VehiclesConnect.Data.Entities;
using Alten.VehiclesConnect.Web.Models;
using AutoMapper;
using System;
using System.Data.Entity;

namespace Alten.VehiclesConnect.Web
{
    public static class AutomapperConfig
    {
        public static void Register()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<Vehicle, VehicleDto>()
                    .ForMember(v => v.Customer, cfg => cfg.MapFrom(v => v.Customer.Name))
                    .ForMember(v => v.IsConnected, cfg => cfg.MapFrom(v => DbFunctions.DiffSeconds(v.LastUpdatedStatus, DateTime.UtcNow) < 60));

                config.CreateMap<Customer, CustomerDto>();
            });
        }
    }
}