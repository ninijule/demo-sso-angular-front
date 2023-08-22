import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name: string = "";

  constructor(private authService: AuthService) {

  }


  ngOnInit(): void {
    let result:any = this.authService.getIdentity();
    console.log(result);
    this.name = result.name;
  }


}
