import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {


  userIsLogged: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.userIsLogged = this.authService.isUserLogged();
  }

  redirectToAnotherPage(pageName: string) {
    this.router.navigate([`/${pageName}`]);
  }


  logout() {
    this.authService.disconnect();
  }

}
