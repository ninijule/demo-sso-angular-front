import {QuestionModel} from "./question.model";

export interface GeneratedQuestionModel {

  name: string;
  description: string;
  version: string;
  questions: QuestionModel[]
}
