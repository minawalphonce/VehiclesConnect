import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CustomerDto } from '../models/customer.dto';
import { AuthenticationContext } from '../authentication-context';

@Injectable()
export class CustomesService {
    constructor(private http: Http, private authenticationContext: AuthenticationContext) { }

    GetCustomers(): Observable<CustomerDto[]> {

        const headers = new Headers();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }

        return this.http.request(`/api/customers`, {
            method: RequestMethod.Get,
            headers: headers
        }).map(res => res.json());
    }
}