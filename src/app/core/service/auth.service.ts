import {Injectable} from '@angular/core';
import {OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../../config/authCodeflow";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private oauth2Service: OAuthService, private router: Router) {
    this.oauth2Service.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.log(event)
      } else {
        console.log(event);
      }
    });

    this.oauth2Service.setupAutomaticSilentRefresh();

  }


  public configureSSO(): Promise<void> {
    this.oauth2Service.configure(authCodeFlowConfig);
    this.oauth2Service.tokenValidationHandler = new JwksValidationHandler();
    return this.oauth2Service.loadDiscoveryDocument().then(() => {
    }).then(() => {
      this.oauth2Service.tryLogin().then(() => {
        if (this.oauth2Service.hasValidAccessToken()) {
          return Promise.resolve();
        }
        return this.oauth2Service.silentRefresh()
          .then(() => Promise.resolve())
          .catch(result => {
            console.log(result);
            if (result) {
              return Promise.resolve();
            }
            return Promise.reject();
          })
      })
    });
  }

  login() {

    this.oauth2Service.initCodeFlow();
  }

  logout() {
    this.oauth2Service.logOut();
  }

  getIdentity() {
    return this.oauth2Service.getIdentityClaims();
  }

  getAccessToken() {
    return this.oauth2Service.getAccessToken();
  }


  isUserLogged(): boolean {
    let hasIdToken = this.oauth2Service.hasValidIdToken();
    let hasAccessToken = this.oauth2Service.hasValidAccessToken();
    if (hasAccessToken && hasIdToken) {
      return true;
    } else {
      this.oauth2Service.silentRefresh().then(r => console.log(r)).catch(e => console.log(e));
      console.log(hasIdToken);
      console.log(hasAccessToken);
      this.router.navigate(["/"]);
      return false;
    }
  }


}
