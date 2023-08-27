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
    this.cellData = this.jobs.skills.flatMap(item => item.technology.map(tech => tech.name)).join(', ');
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.cellData = params.data;
    return true;
  }

}
