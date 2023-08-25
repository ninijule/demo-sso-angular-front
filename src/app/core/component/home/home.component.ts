import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {JobService} from "../../service/job.service";
import {JobModel} from "../../model/job.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "";

  questions: JobModel[] = [];

  constructor(private authService: AuthService, private jobService: JobService) {

  }


  ngOnInit(): void {
    let result: any = this.authService.getIdentity();
    console.log(result);
    this.name = result.name;
    this.jobService.getAllJobs().subscribe((result) => {
      this.questions = result;
    });
  }


}
