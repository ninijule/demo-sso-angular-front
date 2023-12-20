import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {GeneratedQuestionModel} from "../model/generated-question.model";

@Injectable({
  providedIn: "root"
})
export class GenerateQuestionService {

  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getRandomQuestionByParameters(technologyList: any): Observable<GeneratedQuestionModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.post<GeneratedQuestionModel[]>(this.apiUrl + "/generate-question", {
      technologyList
    }, {headers});
  }

}
