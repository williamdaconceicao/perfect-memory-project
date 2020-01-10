import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/model/Movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  // The movie list, with the ten movies which is displayed by default.
  // We use the ID key to display the content, the name and the date one's is used by the filterers
  /**
   * @internal
   */
  public movies$: Observable<Movie[]>;

  public searchYear: string;
  public searchText: string;

  ngOnInit() {
    this.movies$ = this.movieService.popular();
  }

  constructor(private movieService: MovieService) {}

  /**
   * Called when a user enter a name of a movie
   * @param name a movie name
   */
  public performSearch(name: string) {
    this.showData(name);
  }

  /**
   * Called after the performSearch function is called
   */
  private showData(query: string) {
    // We fetch the data, using and url and a name enter by the user and change the movies list using this data
    this.movies$ = this.getData(query);
  }

  private getData(query: string) {
    return this.movieService.search({ query });
  }
}
