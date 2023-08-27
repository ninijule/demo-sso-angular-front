import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillCellRendererComponent} from "./skill-cell-renderer/skill-cell-renderer.component";
import {TechnologyCellRendererComponent} from "./technology-cell-renderer/technology-cell-renderer.component";


@NgModule({
  declarations: [SkillCellRendererComponent, TechnologyCellRendererComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
