import {Component, OnInit} from '@angular/core';
import {authCodeFlowConfig} from "../../../../config/authCodeflow";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oauth2service: OAuthService) {

  }


  ngOnInit(): void {
    this.ConfigureSSO();
  }


  ConfigureSSO() {
    this.oauth2service.configure(authCodeFlowConfig);
    this.oauth2service.tokenValidationHandler = new JwksValidationHandler();
    this.oauth2service.loadDiscoveryDocumentAndTryLogin();
  }


  login() {
    this.oauth2service.initCodeFlow();
  }

}
