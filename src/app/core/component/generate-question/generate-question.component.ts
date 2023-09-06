import {Component, OnInit} from '@angular/core';
import {JobService} from "../../service/job.service";
import {JobModel} from "../../model/job.model";
import {TechnologyModel} from "../../model/technology.model";
import {SkillModel} from "../../model/skill.model";


@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss']
})
export class GenerateQuestionComponent implements OnInit {

  selectedJob!: string;
  selectedSkills!: JobModel;
  selectedTechnology!: string;

  jobs!: JobModel[];
  job: JobModel = {
    name: "",
    skills: []
  };

  technologies: TechnologyModel[] = [];

  skills: SkillModel[] = [];

  isDisabledSkills = true;

  isDisabledTechnology = true;

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((result) => {
      if (result) this.jobs = result;
    })
  }

  getSelectedEventJob($event: any) {
    this.job = this.jobs.find(item => item.name === $event.value) ?? this.job;
    if (this.job.skills.length !== 0) {
      this.isDisabledSkills = false;
    }
  }

  getSelectedEventSkills($event: any) {
    this.isDisabledTechnology = false;
    this.skills = $event.value;
    console.log(this.skills);
  }

}
