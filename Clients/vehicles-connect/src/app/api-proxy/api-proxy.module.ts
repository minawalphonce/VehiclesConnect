import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthenticationContext } from './authentication-context';
import { OAuthService } from './services/oauth.service';
import { VehiclesService } from './services/vehicles.service';

@NgModule({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [
        OAuthService,
        VehiclesService,
        AuthenticationContext
    ],
})
export class ApiProxyModule { }