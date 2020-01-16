import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/model/Movie.model';
import { map } from 'rxjs/operators';

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
  public searchYear: string;
  public searchText: string;
  public showNav = true;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.movieService.popular()
      .pipe(map(response => response.results));
  }

  public toggleNav(): void {
    this.showNav = !this.showNav;
  }

  /**
   * Called when a user enter a name of a movie
   * @param name a movie name
   */
  public performSearch(name: string): void {
    this.showData(name);
  }

  /**
   * Called after the performSearch function is called
   */
  private showData(query: string): void {
    // We fetch the data, using and url and a name enter by the user and change the movies list using this data
    this.movies$ = this.getData(query)
      .pipe(map(response => response.results));
  }

  private getData(query: string): Observable<{ results: Movie[] }> {
    return this.movieService.search({ query });
  }
}
