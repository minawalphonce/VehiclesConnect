import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IdentityDto } from './models/identity.dto';
import { OAuthService } from './services/oauth.service';

@Injectable()
export class AuthenticationContext {

    private identity$: BehaviorSubject<IdentityDto>;

    constructor(private oAuthService: OAuthService) {
        this.identity$ = new BehaviorSubject<IdentityDto>(null);
    }

    get accessToken(): string {
        if (this.identity$.value)
            return this.identity$.value.access_token;
        return null;
    }
    get isAuthenticated(): boolean {
        return this.accessToken != null;
    }

    get identityChange(): Observable<IdentityDto> {
        return this.identity$;
    }

    signIn(username: string, password: string): Observable<boolean> {
        return this.oAuthService.getToken(username, password)
            .map(identity => {
                this.identity$.next(identity);
                return true;
            });
    }

    signOut() {
        this.identity$.next(null);
    }
}
