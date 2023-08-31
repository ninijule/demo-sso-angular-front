import {Component, OnInit} from '@angular/core';
import {JobService} from '../../service/job.service';
import {JobModel} from '../../model/job.model';

@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss'],
})
export class GenerateQuestionComponent implements OnInit {
  selectedJob!: string;
  selectedSkills!: string[];
  jobs!: JobModel[];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((result) => {
      if (result) this.jobs = result;
    });
  }

  onJobSelectedChange($event: any) {
  }
}
