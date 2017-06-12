using Alten.VehiclesConnect.Data.Entities;
using Alten.VehiclesConnect.Web.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Alten.VehiclesConnect.Web
{
    public static class AutomapperConfig
    {
        public static void Register()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<Vehicle, VehicleDto>();
            });
        }
    }
}