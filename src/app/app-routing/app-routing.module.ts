import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../guard/auth.guard";
import {WelcomeComponent} from "../core/component/welcome/welcome.component";
import {CommonModule} from "@angular/common";
import {AgGridModule} from 'ag-grid-angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../core/component/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'generate',
    loadChildren: () => import('../core/component/generate-question/generate-question.module').then(m => m.GenerateQuestionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: "full"
  }

]

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    AgGridModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
