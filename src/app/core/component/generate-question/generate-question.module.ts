import {NgModule} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {GenerateQuestionRoutingModule} from "./generate-question-routing.module";
import {GenerateQuestionComponent} from "./generate-question.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [GenerateQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    GenerateQuestionRoutingModule,
  ]
})
export class GenerateQuestionModule {
}
