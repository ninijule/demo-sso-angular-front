import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {QuestionModel} from "../model/question.model";

@Injectable({
  providedIn: "root"
})
export class GenerateQuestionService {

  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getRandomQuestionByParameters(skillIdList: any[]): Observable<QuestionModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.post<QuestionModel[]>(this.apiUrl + "/generate-question", {skillIdList}, {headers});
  }

}
