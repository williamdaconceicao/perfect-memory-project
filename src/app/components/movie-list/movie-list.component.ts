import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '@app/services/movie/movie.service';
import { Movie, Genre } from '@model/Movie.model';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})

export class MovieListComponent implements OnInit {
  // The movie list, with the ten movies which is displayed by default.
  // We use the ID key to display the content, the name and the date one's is used by the filterers
  /**
   * @internal
   */
  public movies$: Observable<Movie[]>;

  public isSearching = false;
  public searchYear: string;

  public searchGenre: Genre;

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

  public urlSearch = '';

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.movies$ = this.activatedRoute.params
      .pipe(
        switchMap(params => {
          if (!params.name) {
            // popular
            this.isSearching = false;
            this.urlSearch = '';
            return this.getPopularMovies();
          }
          // search
          this.isSearching = true;
          this.urlSearch = this.activatedRoute.snapshot.params.name;
          return this.performSearch(this.activatedRoute.snapshot.params.name);
        }),
        map(results => results.results)
      );
  }

  private getPopularMovies(): Observable<{ results: Movie[] }> {
    return this.movieService.popular();
  }

  /**
   * Called when a user enter a name of a movie
   * @param name a movie name
   */
  private performSearch(query: string): Observable<{ results: Movie[] }> {
    return this.movieService.search({ query });
  }
}
