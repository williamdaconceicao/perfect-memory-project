import { CreditService } from './credits.service';
import { TestBed } from '@angular/core/testing';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { MockTheMovieDbService } from '../themovidedb/themoviedb.service.mock';
import { of } from 'rxjs';

describe('CreditService', () => {
  let service: CreditService;
  let dbService: TheMovieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService }
      ]
    });

    service = TestBed.get(CreditService);
    dbService = TestBed.get(TheMovieDbService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('searchCredit', () => {
    it('should return credit details', done => {
      spyOn(dbService, 'get').and.returnValue(of({
        id: 1,
        cast: [],
        crew: []
      }));
      service.searchCredit({ id: 'test' }).subscribe(credit => {
        expect(credit).toEqual({
          id: 1,
          cast: [],
          crew: []
        });
        done();
      });
    });

    it('should fetch the credits by its id', done => {
      spyOn(dbService, 'get').and.returnValue(of({
        id: 1,
        cast: [],
        crew: []
      }));
      service.searchCredit({ id: 'test' }).subscribe(() => {
        expect(dbService.get).toHaveBeenCalledWith('/movie/test/credits');
        done();
      });
    });
  });
});
