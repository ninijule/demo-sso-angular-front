import {SkillModel} from "./skill.model";

export interface JobModel {
  name: string;
  id: string;
  skills: SkillModel[];

}
