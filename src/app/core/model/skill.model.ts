import {TechnologyModel} from "./technology.model";

export interface SkillModel {
  id: number;
  name: string;
  description: string;
  technology: TechnologyModel[];
}
