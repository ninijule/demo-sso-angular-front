import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {QuestionService} from "../../service/question.service";
import {QuestionModel} from "../../model/question.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "";

  questions: QuestionModel[] = [];

  constructor(private authService: AuthService, private questionService: QuestionService) {

  }


  ngOnInit(): void {
    let result: any = this.authService.getIdentity();
    console.log(result);
    this.name = result.name;
    this.questionService.getQuestion().subscribe((result) => {
      this.questions = result;
    });
  }


}
