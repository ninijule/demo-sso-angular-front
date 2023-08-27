import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenerateQuestionRoutingModule} from "./generate-question-routing.module";
import {GenerateQuestionComponent} from "./generate-question.component";


@NgModule({
  declarations: [GenerateQuestionComponent],
  imports: [
    CommonModule,
    GenerateQuestionRoutingModule,
  ]
})
export class GenerateQuestionModule {
}
