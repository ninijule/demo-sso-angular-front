import {Injectable} from '@angular/core';
import {OAuthErrorEvent, OAuthService, OAuthSuccessEvent} from "angular-oauth2-oidc";
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


  public configureSSO(): Promise<boolean> {
    this.oauth2Service.configure(authCodeFlowConfig);
    this.oauth2Service.tokenValidationHandler = new JwksValidationHandler();
    return this.oauth2Service.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauth2Service.initCodeFlow();
  }

  disconnect() {
    this.oauth2Service.logOut();
    this.router.navigate(["/home"]);
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
    return hasAccessToken && hasIdToken;
  }


}
