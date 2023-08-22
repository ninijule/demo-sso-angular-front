import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: string = "coucou";

  constructor(private authService: AuthService) {

  }


  login() {
    this.authService.login();
  }


}
