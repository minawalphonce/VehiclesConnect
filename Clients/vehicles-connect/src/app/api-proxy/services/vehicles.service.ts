import { Injectable } from '@angular/core';
import { Http, RequestMethod, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthenticationContext } from '../authentication-context';
import { VehicleDto } from '../models/vehicle.dto';
import { FindVehicleFilter } from '../models/findVehicle.filter';

@Injectable()
export class VehiclesService {
    constructor(private http: Http, private authenticationContext: AuthenticationContext) {
    }

    findVehicles(filter: FindVehicleFilter): Observable<VehicleDto[]> {

        const queryString = new URLSearchParams();
        for (const prop in filter) {
            if (filter[prop]) {
                queryString[prop] = filter[prop];
            }
        }

        const headers = new Headers();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }

        return this.http.request(`/api/vehicles`, {
            method: RequestMethod.Get,
            search: queryString,
            headers: headers
        })
            .map(res => res.json());
        // .catch(error => );
    }
    findVehicleById(id: number): Observable<VehicleDto> {
        const headers = new Headers();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }

        return this.http.request(`/api/vehicles/${id}`, {
            method: RequestMethod.Get,
            headers: headers
        })
            .map(res => res.json());
    }

    pingVehicle(id: number): Observable<{}> {
        const headers = new Headers();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }

        return this.http.request(`/api/vehicles/${id}/ping`, {
            method: RequestMethod.Put,
            headers: headers
        })
            .map(res => ({}));
    }
}
