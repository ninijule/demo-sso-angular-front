import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit{

  userLogged = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userLogged = this.authService.isUserLogged();
  }

  ngAfterViewInit(): void {
    this.userLogged = this.authService.isUserLogged();
  }

}
