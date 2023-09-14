import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {TechnologyModel} from "../model/technology.model";

@Injectable({
  providedIn: "root"
})
export class TechnologyService {

  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getTechnologyBySKillId(skillIdList: string[]): Observable<TechnologyModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());
    return this.http.post<TechnologyModel[]>(this.apiUrl + "/technology/", {skillIdList}, {headers});
  }

}
