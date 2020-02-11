import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '@model/Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MockMovieService {
  constructor() {}

  public search(): Observable<{ results: Movie[]}> {
    return of({ results: undefined });
  }

  public popular(): Observable<{ results: Movie[] }> {
    return of({results: undefined});
  }

  public searchMovie(options: {
    id: string;
  }): Observable<Movie> {
    return of(undefined);
  }

}
