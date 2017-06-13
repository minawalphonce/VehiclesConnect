import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { VehiclesService } from './services/vehicles.service';
import { CustomesService } from './services/customers.service';

@NgModule({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [
        VehiclesService,
        CustomesService
    ],
})
export class ApiProxyModule { }
