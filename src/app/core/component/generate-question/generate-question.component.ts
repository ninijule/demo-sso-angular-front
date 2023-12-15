import {Component, OnInit} from '@angular/core';
import {JobService} from "../../service/job.service";
import {JobModel} from "../../model/job.model";
import {TechnologyModel} from "../../model/technology.model";
import {FormBuilder, FormControl} from "@angular/forms";
import {SkillModel} from "../../model/skill.model";
import {SkillService} from "../../service/skill.service";
import {TechnologyService} from "../../service/technology.service";


@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss']
})
export class GenerateQuestionComponent implements OnInit {

  jobs!: JobModel[];
  job: JobModel = {
    id: "",
    name: "",
    skills: []
  };

  technologies: TechnologyModel[] = [];

  skills: SkillModel[] = [];

  skillsControl = new FormControl([]);

  jobControl = new FormControl("");

  technologiesControl = new FormControl([]);


  jobForm = this.formBuilder.group({
    job: this.jobControl,
    skill: this.skillsControl,
    technology: this.technologiesControl
  });

  constructor(private jobService: JobService,
              private skillService: SkillService,
              private technologyService: TechnologyService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.jobForm.get('skills')?.disable();
    this.jobService.getAllJobs().subscribe((result) => {
      if (result) this.jobs = result;
    });
  }

  getSelectedEventJob($event: any) {
    this.job = this.jobs.find(item => item.name === $event.value) ?? this.job;

    this.skillService.getJobAndSkillByJobId(this.job.id).subscribe((result) => {
      this.skills = result;
      this.jobForm.get('skills')?.enable();
      console.log(this.skills);

    });
  }

  getSelectedEventSkills($event: any) {

    const skillIdList: string [] = [];
    $event.value.map((id: string) => skillIdList.push(id));
    console.log(skillIdList)
    this.technologyService.getTechnologyBySKillId(skillIdList).subscribe((result) => {
      this.technologies = result;
    });
  }

  onSubmit(): void {
    console.log(this.jobForm.value);
  }

}
