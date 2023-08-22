import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  name: string = "";


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.configureSSO();
    const userClaims: any = this.authService.getIdentity();
    this.name = userClaims.name ? userClaims.name : "";
  }

  logout() {
    this.authService.disconnect();
  }

  login(){
    this.authService.login();
  }



  configureSSO() {
    this.authService.configureSSO();
  }


  get token(){
    let claims: any = this.authService.getIdentity();
    return claims ? claims : null;
  }

}
