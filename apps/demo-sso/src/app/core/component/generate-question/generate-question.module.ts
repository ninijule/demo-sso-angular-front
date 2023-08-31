import {NgModule} from '@angular/core';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GenerateQuestionRoutingModule} from './generate-question-routing.module';
import {GenerateQuestionComponent} from './generate-question.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [GenerateQuestionComponent],
  imports: [
    GenerateQuestionRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule,
  ],
})
export class GenerateQuestionModule {
}
