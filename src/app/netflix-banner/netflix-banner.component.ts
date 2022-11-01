import { Component, OnInit } from '@angular/core';
import { Movie, movieList } from '../models/movie';

@Component({
  selector: 'app-netflix-banner',
  templateUrl: './netflix-banner.component.html',
  styleUrls: ['./netflix-banner.component.css']
})
export class NetflixBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies: Movie[] = movieList;

}
