import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CustomerDto } from '../models/customer.dto';

@Injectable()
export class CustomesService {
    constructor(private http: Http) { }

    GetCustomers(): Observable<CustomerDto[]> {
        return this.http.request(`/api/customers`, {
            method: RequestMethod.Get,
        }).map(res => res.json());
    }
}
