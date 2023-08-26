import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from "ag-grid-community";
import {JobModel} from "../../../model/job.model";


@Component({
  selector: 'app-skill-cell-renderer',
  templateUrl: './skill-cell-renderer.component.html',
  styleUrls: ['./skill-cell-renderer.component.scss']
})
export class SkillCellRendererComponent implements ICellRendererAngularComp {
  public cellValue!: string[];
  public jobs!: JobModel;

  agInit(params: ICellRendererParams): void {
    this.jobs = params.data;
    this.cellValue = this.jobs.skills.map(item => item.name);
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.cellValue = params.data;
    return true;
  }


}
