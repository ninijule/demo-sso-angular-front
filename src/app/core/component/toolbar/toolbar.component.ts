import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService) {
  }


  logout() {
    this.authService.disconnect();
  }

  ngOnInit(): void {
    this.configureSSO();
  }

  configureSSO() {
    this.authService.configureSSO();
  }

}
