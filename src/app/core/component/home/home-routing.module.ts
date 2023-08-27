import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../../guard/auth.guard";
import {AgGridModule} from "ag-grid-angular";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: "full"
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
