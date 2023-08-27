import {Component} from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {JobModel} from "../../../model/job.model";

@Component({
  selector: 'app-technology-cell-renderer',
  templateUrl: './technology-cell-renderer.component.html',
  styleUrls: ['./technology-cell-renderer.component.scss']
})
export class TechnologyCellRendererComponent implements ICellRendererAngularComp {
  public cellData: string = "";
  public jobs!: JobModel;

  agInit(params: ICellRendererParams): void {
    this.jobs = params.data;
    this.jobs.skills.forEach(item => {
      item.technology.forEach(tech => {
        this.cellData = this.cellData + tech.name
      })
    });
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.cellData = params.data;
    return true;
  }

}
