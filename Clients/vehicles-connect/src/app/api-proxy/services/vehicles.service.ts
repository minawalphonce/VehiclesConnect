import { Injectable } from '@angular/core';
import { Http, RequestMethod, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { VehicleDto } from '../models/vehicle.dto';
import { FindVehicleFilter } from '../models/findVehicle.filter';

@Injectable()
export class VehiclesService {
    constructor(private http: Http) {
    }

    findVehicles(filter: FindVehicleFilter): Observable<VehicleDto[]> {

        const queryString = new URLSearchParams();
        for (const prop in filter) {
            if (filter[prop]) {
                queryString.set(prop, filter[prop]);
            }
        }

        return this.http.request(`/api/vehicles`, {
            method: RequestMethod.Get,
            search: queryString
        })
            .map(res => res.json());
    }

    pingVehicle(id: number): Observable<{}> {
        return this.http.request(`/api/vehicles/${id}/ping`, {
            method: RequestMethod.Put
        })
            .map(res => ({}));
    }
}
