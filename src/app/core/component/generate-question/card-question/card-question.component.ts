import {Component, Input} from '@angular/core';
import {GeneratedQuestionModel} from "../../../model/generated-question.model";

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss']
})
export class CardQuestionComponent {

  @Input()
  questions: GeneratedQuestionModel[] = [];

}
