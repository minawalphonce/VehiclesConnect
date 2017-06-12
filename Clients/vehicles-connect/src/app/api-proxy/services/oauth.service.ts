import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';
import { IdentityDto } from '../models/identity.dto';

@Injectable()
export class OAuthService {
    constructor(private http: Http) {
    }
    getToken(username: string, password: string): Observable<IdentityDto> {
        let req = `grant_type=password&username=${username}&password=${password}`;
        if (environment.clientId) {
            req = req + `&client_id=${environment.clientId}`;
        }
        return this.http.post('/token', req).map(res => res.json());
    }
}
