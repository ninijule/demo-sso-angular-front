import {Component, OnInit} from '@angular/core';
import {JobService} from "../../service/job.service";
import {JobModel} from "../../model/job.model";
import {TechnologyModel} from "../../model/technology.model";
import {FormBuilder, FormControl} from "@angular/forms";
import {SkillModel} from "../../model/skill.model";
import {SkillService} from "../../service/skill.service";


@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss']
})
export class GenerateQuestionComponent implements OnInit {

  selectedJob!: string;

  jobs!: JobModel[];
  job: JobModel = {
    id: "",
    name: "",
    skills: []
  };

  technologies: TechnologyModel[] = [];

  isDisabledTechnology = true;

  skills: SkillModel[] = [];

  skillsControl = new FormControl([1]);

  jobControl = new FormControl("");

  jobForm = this.formBuilder.group({
    job: this.jobControl,
    skill: this.skillsControl
  });

  constructor(private jobService: JobService,
              private skillService: SkillService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((result) => {
      if (result) this.jobs = result;
    });
  }

  getSelectedEventJob($event: any) {
    this.job = this.jobs.find(item => item.name === $event.value) ?? this.job;

    this.skillService.getSkillsbyJobName(this.job.id).subscribe((result) => {
      console.log(result);
    });
    this.jobForm.get('skills')?.enable();
    console.log("this")

  }

  getSelectedEventSkills($event: any) {

    if ($event.value.length === 0) {
      return; // No need to proceed if the input is empty
    }

    const selectedSkills = $event.value;

    this.skills = $event.value;

    for (const skill of selectedSkills) {
      for (const tech of skill.technology) {
        if (!this.technologies.includes(tech)) {
          this.technologies.push(tech);
        }
      }
    }

    if (this.technologies.length > 0) {
      this.isDisabledTechnology = false;
    }

  }

  onSubmit(): void {
    console.log(this.jobForm.value);
  }

}
