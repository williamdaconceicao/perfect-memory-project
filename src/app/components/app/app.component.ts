import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie/movie.service';

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
  public movies$: Observable<any> = EMPTY;

  private movies = [
    {
        name: 'Forrest Gump',
        id: 13,
        date: '1994-07-06',
    },
    {
        name: 'Shutter Island',
        id: 11324,
        date: '2010-02-14'
    },
    {
        name: 'Inception',
        id: 27205,
        date: '2010-07-15',
    },
    {
        name: 'The Wolf of Wall Street',
        id: 106646,
        date: '2013-12-25'
    },
    {
        name: 'The Prestige',
        id: 1124,
        date: '2006-10-19',
    },
    {
        name: 'Pride & Prejudice',
        id: 4348,
        date: '2005-09-16',
    },
    {
        name: 'Moana',
        id: 277834,
        date: '2016-11-23',
    },
    {
        name: 'Sin City',
        id: 187,
        date: '2005-04-01',
    },
    {
        name: '2001: A Space Odyssey',
        id: 62,
        date: '1968-04-09',
    },
    {
        name: 'The Green Mile',
        id: 497,
        date: '1999-12-10',
    }
  ];

  constructor(private movieService: MovieService) {}

  public ngOnInit(): void {
    this.showData(name);
  }

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
    this.movies$ = this.getData(query)
      .pipe(
        map(data => {
          return data.results.splice(0, 9)
            .map(result => this.buildMovie(result));
        }),
        startWith(this.movies),
      );
  }

  private getData(query: string) {
    return this.movieService.search({ query });
  }

  private buildMovie(result: any): any {
    return {
      name: result.original_title,
      id: result.id,
      date: result.release_date,
    };
  }
}
