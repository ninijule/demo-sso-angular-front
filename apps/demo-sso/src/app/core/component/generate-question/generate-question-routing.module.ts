import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../guard/auth.guard';
import {GenerateQuestionComponent} from './generate-question.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateQuestionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateQuestionRoutingModule {
}
