import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../guard/auth.guard";
import {HomeComponent} from "../core/component/home/home.component";
import {WelcomeComponent} from "../core/component/welcome/welcome.component";

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
    path: '**',
    redirectTo: 'home',
    pathMatch: "full"
  }

]

@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
