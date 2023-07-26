import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MovieModel} from "../model/movie.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private movieUrl = "http://localhost:5050"

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getMovie(): Observable<MovieModel[]> {
    let headers = new HttpHeaders().set('Accept', 'application/json').set('Authorization', 'Bearer ' + this.authService.getAccessToken());

    return this.http.get<MovieModel[]>(this.movieUrl + "/movie", {headers});
  }

}
