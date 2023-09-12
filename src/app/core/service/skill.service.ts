import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {SkillModel} from "../model/skill.model";

@Injectable({
  providedIn: "root"
})
export class SkillService {

  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getSkillsbyJobName(jobName: string): Observable<SkillModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.get<SkillModel[]>(this.apiUrl + "/skill/" + jobName, {headers});
  }

  public getJobAndSkillByJobName(jobId: string): Observable<SkillModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.get<SkillModel[]>(this.apiUrl + "/skill/" + jobId, {headers});
  }

}
