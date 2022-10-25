import { Component, Input, OnInit } from '@angular/core';
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

  movies: Movie[] = movieList;

}
