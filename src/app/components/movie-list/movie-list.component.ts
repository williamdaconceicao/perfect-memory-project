import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie, Genre } from 'src/model/Movie.model';
import { map, filter, switchMap } from 'rxjs/operators';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
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

  @Input()
  public urlSearch: string;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.movies$ = this.activatedRoute.params
      .pipe(
        switchMap(params => {
          if (!params.name) {
            // popular
            this.isSearching = false;
            return this.getPopularMovies();
          }

          // search
          this.isSearching = true;
          return this.performSearch(this.activatedRoute.snapshot.params.name);
        }),
        map(results => results.results)
      );
  }

  public submit(value: string): void {
    this.router.navigateByUrl('/search/' + value);
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
