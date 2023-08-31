import {SkillModel} from './skill.model';

export interface JobModel {
  name: string;

  skills: SkillModel[];
}
