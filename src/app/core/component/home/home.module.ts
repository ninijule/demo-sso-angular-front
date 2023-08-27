import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillCellRendererComponent} from "./skill-cell-renderer/skill-cell-renderer.component";
import {TechnologyCellRendererComponent} from "./technology-cell-renderer/technology-cell-renderer.component";
import {HomeComponent} from "./home.component";
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [HomeComponent, SkillCellRendererComponent, TechnologyCellRendererComponent],
  imports: [
    CommonModule,
    AgGridModule
  ]
})
export class HomeModule {
}
