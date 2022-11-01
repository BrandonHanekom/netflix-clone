import { Component } from '@angular/core';
import { Movie, movieList } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  availableMovies = movieList.filter((movie) => movie.comingSoon == false);
  comingSoonMovies = movieList.filter((movie) => movie.comingSoon == true);

  myWatchlist: Movie[] = [];

  addMovieToWatchlist(item: Movie) {
    this.myWatchlist.push(item);
  }
}
