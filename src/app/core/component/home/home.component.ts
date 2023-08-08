import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {AuthService} from "../../service/auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isAuth: boolean = this.authService.isUserLogged();

  constructor(private authService: AuthService, private router: Router) {

  }


  ngOnInit(): void {
    this.ConfigureSSO();
  }


  ConfigureSSO() {
    this.authService.configureSSO();
    if (this.authService.isUserLogged()) this.router.navigate(["/profile"]);
  }


  login() {
    this.authService.login();
  }


}
