import { Injectable, } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credits } from 'src/model/Credits.model';

@Injectable({
  providedIn: 'root',
})
export class MockCreditService {
  constructor() {}
  public searchCredit(options: {
    id: string;
  }): Observable<Credits> {
    return of(undefined);
  }
}
