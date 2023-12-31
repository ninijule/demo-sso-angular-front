import {NgModule} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {GenerateQuestionRoutingModule} from "./generate-question-routing.module";
import {GenerateQuestionComponent} from "./generate-question.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {PipeModule} from "../../../pipe/pipe.module";
import {CardQuestionComponent} from "./card-question/card-question.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [GenerateQuestionComponent, CardQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    GenerateQuestionRoutingModule,
    PipeModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class GenerateQuestionModule {
}
