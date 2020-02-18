import { Component, OnInit } from '@angular/core';
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
  public isSearching = false;

  public searchYear: string;
  public urlSearch = '';

  public searchGenre: Genre;

  public movies$: Observable<Movie[]>;


  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.movies$ = this.activatedRoute.params
      .pipe(
        switchMap(params => {
          if (!params.name) {
            return this.getPopularMovies();
          }
          // search
          this.isSearching = true;
          this.urlSearch = params.name;
          return this.performSearch(params.name);
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
