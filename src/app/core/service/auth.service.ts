import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../../config/authCodeflow";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauth2Service: OAuthService, private router: Router) {
  }




  configureSSO() {
    this.oauth2Service.configure(authCodeFlowConfig);
    this.oauth2Service.tokenValidationHandler = new JwksValidationHandler();
    this.oauth2Service.loadDiscoveryDocumentAndTryLogin().then(r => console.log(r));

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


  isUserLogged(): boolean {
    let hasIdToken = this.oauth2Service.hasValidIdToken();
    let hasAccessToken = this.oauth2Service.hasValidAccessToken();
    if (hasAccessToken && hasIdToken) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }


}
