import {TechnologyModel} from './technology.model';

export interface SkillModel {
  name: string;
  description: string;
  technology: TechnologyModel[];
}
