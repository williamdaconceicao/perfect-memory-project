import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { Observable } from 'rxjs';
import { Credits } from '@model/Credits.model';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  constructor(
    private db: TheMovieDbService
  ) {}

  public searchCredit(options: {
    id: string;
  }): Observable<Credits> {
    return this.db.get<Credits>(`/movie/${options.id}/credits`);
  }

}
