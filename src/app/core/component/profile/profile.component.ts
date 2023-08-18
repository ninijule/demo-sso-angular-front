import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {MovieService} from "../../service/movie.service";
import {MovieModel} from "../../model/movie.model";
import {Observable} from "rxjs";
import {increment} from "../../action/counter.action";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  counter$: Observable<number>;


  public userData: any;

  public movieModel!: MovieModel[];

  constructor(private authService: AuthService, private movieService: MovieService,
              private store: Store<{ count: number }>) {
    this.counter$ = store.select('count');
    this.userData = this.authService.getIdentity();

    this.movieService.getMovie().subscribe((result) => {
      console.log(result);
      this.movieModel = result;
    });

  }

  incrementValue() {
    this.store.dispatch(increment());

  }


}
