import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {JobModel} from "../model/job.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class JobService {

  private apiUrl = "http://localhost:5050"


  constructor(private http: HttpClient, private authService: AuthService) {
  }


  public getAllJobs(): Observable<JobModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.get<JobModel[]>(this.apiUrl + "/job", {headers});
  }

}
