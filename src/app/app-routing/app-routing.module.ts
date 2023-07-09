import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../core/component/home/home.component";
import {ProfileComponent} from "../core/component/profile/profile.component";
import {AuthGuard} from "../guard/auth.guard";
import {MainComponent} from "../core/component/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: "",
    pathMatch: "full"
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
