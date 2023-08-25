import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../guard/auth.guard";
import {HomeComponent} from "../core/component/home/home.component";
import {WelcomeComponent} from "../core/component/welcome/welcome.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
