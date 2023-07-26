import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {MovieService} from "../../service/movie.service";
import {MovieModel} from "../../model/movie.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public userData: any;

  public movieModel!: MovieModel[];

  constructor(private authService: AuthService, private movieService: MovieService) {
    this.userData = this.authService.getIdentity();

    this.movieService.getMovie().subscribe((result) => {
      console.log(result);
      this.movieModel = result;
    });

  }


}
