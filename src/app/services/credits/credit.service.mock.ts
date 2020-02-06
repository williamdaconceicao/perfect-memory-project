import { Injectable, } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { Credits } from 'src/model/Credits.model';

@Injectable({
  providedIn: 'root',
})
export class MockCreditService {
  constructor(
    private db: TheMovieDbService
  ) {}
  public searchCredit(options: {
    id: string;
  }): Observable<Credits> {
    return of(undefined);
  }
}
