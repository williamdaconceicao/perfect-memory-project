import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/model/Movie.model';

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
  }): Observable<Movie[]> {
    return this.db.get<Movie[]>('/search/movie', options);
  }

  public popular(): Observable<Movie[]> {
    return this.db.get<Movie[]>('/movie/popular');
  }

  public searchMovie(options: {
    id: string;
  }): Observable<Movie> {
    return this.db.get<Movie>(`/movie/${options.id}`);
  }

}
