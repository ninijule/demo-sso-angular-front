import {Injectable} from '@angular/core';
import {OAuthErrorEvent, OAuthService, OAuthSuccessEvent} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../../config/authCodeflow";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged : boolean = this.isUserLogged();

  constructor(private oauth2Service: OAuthService, private router: Router) {
    this.oauth2Service.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.log(event)
      } else {
        console.log(event);
      }
    });


  }


  public configureSSO(): Promise<boolean> {
    this.oauth2Service.configure({
      issuer: 'http://localhost:8080/realms/thales',

      // URL of the SPA to redirect the user to after login
      redirectUri: 'http://localhost:4200/home',

      // The SPA's id. The SPA is registerd with this id at the auth-server
      // clientId: 'server.code',
      clientId: 'trynity',

      // Just needed if your auth server demands a secret. In general, this
      // is a sign that the auth server is not configured with SPAs in mind
      // and it might not enforce further best practices vital for security
      // such applications.
      // dummyClientSecret: 'secret',

      responseType: 'code',

      // set the scope for the permissions the client should request
      // The first four are defined by OIDC.
      // Important: Request offline_access to get a refresh token
      // The api scope is a usecase specific one
      scope: 'openid profile email offline_access',

      showDebugInformation: true,
      revocationEndpoint: 'http://localhost:4200/home'
    });
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
