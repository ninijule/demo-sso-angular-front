import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public userData: any;

  constructor(private authService: AuthService) {
    this.userData = this.authService.getIdentity();
  }


}
