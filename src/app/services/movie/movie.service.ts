import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { Observable } from 'rxjs';

export interface Movie {
  original_title: string;
  id: number;
  release_date: string;
}

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
  }): Observable<{ results: Movie[] }> {
    return this.db.get<{ results: Movie[] }>('/search/movie', options);
  }
}
