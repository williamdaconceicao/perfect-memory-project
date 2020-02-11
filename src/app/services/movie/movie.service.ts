import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { Observable } from 'rxjs';
import { Movie } from '@model/Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private db: TheMovieDbService
  ) {}

  public search(options: {
    query: string;
    // region: string;
    // year: string;
    // primaryReleaseYear: string;
  }): Observable<{ results: Movie[]}> {
    return this.db.get<{ results: Movie[] }>('/search/movie', options);
  }

  public popular(): Observable<{ results: Movie[] }> {
    return this.db.get<{ results: Movie[] }>('/movie/popular');
  }

  public searchMovie(options: {
    id: string;
  }): Observable<Movie> {
    return this.db.get<Movie>(`/movie/${options.id}`);
  }

}
