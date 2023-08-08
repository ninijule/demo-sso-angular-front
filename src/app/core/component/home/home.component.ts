import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isAuth : boolean = this.authService.isUserLogged();

  constructor(private authService: AuthService) {

  }


  ngOnInit(): void {
    this.ConfigureSSO();
  }


  ConfigureSSO() {
    this.authService.configureSSO();
  }


  login() {
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
