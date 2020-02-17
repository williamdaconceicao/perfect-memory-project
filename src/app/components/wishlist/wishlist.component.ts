import { Component, OnInit, Input } from '@angular/core';
import { Genre, Movie } from '@model/Movie.model';
import { MovieService } from '@app/services/movie/movie.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./../../../assets/stylesheet/Component/wishlist/wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  public movies: string[] = [];
  public genresList: Genre[] = [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 14, name: 'Fantasy'},
    {id: 36, name: 'History'},
    {id: 27, name: 'Horror'},
    {id: 10402, name: 'Music'},
    {id: 9648, name: 'Mystery'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 10770, name: 'TV Movie'},
    {id: 53, name: 'Thriller'},
    {id: 10752, name: 'War'},
    {id: 37, name: 'Western'},
  ];
  @Input()
  public urlSearch: string;

  constructor(private movieService: MovieService, ) {}

  ngOnInit() {
    try {
      const movieLocal = JSON.parse(localStorage.getItem('movie'));
      this.movies = Object.keys(movieLocal)
        .filter(key => movieLocal[key] === 'wish');
    } catch {
      this.movies = [];
    }
  }
}
