import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {QuestionModel} from "../model/question.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getQuestion(): Observable<QuestionModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());

    return this.http.get<QuestionModel[]>(this.apiUrl + "/question", {headers});
  }

}
