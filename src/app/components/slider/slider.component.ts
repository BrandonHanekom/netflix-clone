import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, movieList } from 'src/app/models/movie';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  movies: Movie[] = movieList;

  @Input()
  title = '---';

  @Output()
  movieClicked = new EventEmitter<Movie>();

  onMovieClick(item: Movie) {
    this.movieClicked.emit(item);
  }

}
