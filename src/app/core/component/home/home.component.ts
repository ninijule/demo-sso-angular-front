import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {JobService} from "../../service/job.service";
import {JobModel} from "../../model/job.model";
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {SkillCellRendererComponent} from "./skill-cell-renderer/skill-cell-renderer.component";
import {TechnologyCellRendererComponent} from "./technology-cell-renderer/technology-cell-renderer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = "";


  public columnDefs: ColDef [] = [
    {field: 'name', initialWidth: 200, filter: true},
    {field: 'description', initialWidth: 500, filter: true},
    {field: 'skills', cellRenderer: SkillCellRendererComponent, initialWidth: 350, filter: true},
    {
      field: 'technology', cellRenderer: TechnologyCellRendererComponent, initialWidth: 350,
      filter: true
    }
  ];



  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public jobs!: JobModel[];


  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private authService: AuthService, private jobService: JobService) {

  }


  ngOnInit(): void {
    let result: any = this.authService.getIdentity();
    console.log(result);

  }

  onGridReady(params: GridReadyEvent) {
    this.jobService.getAllJobs().subscribe((result) => {
      if(result){
        this.jobs = result;
      }
    });
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }


}
