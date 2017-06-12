﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alten.VehiclesConnect.Utilities.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        void Submit();
    }
}
