import { TestBed } from '@angular/core/testing';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { MockTheMovieDbService } from '../themovidedb/themoviedb.service.mock';
import { of } from 'rxjs';
import { MockMovieService } from './movie.service.mock';

describe('MovieService', () => {
  let service: MockMovieService;
  let dbService: TheMovieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService }
      ]
    });

    service = TestBed.get(MockMovieService);
    dbService = TestBed.get(TheMovieDbService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('#search', () => {
    it('should return an object equal to { results: undefined }', done => {
      spyOn(dbService, 'get').and.returnValue(of({results: undefined}));
      service.search().subscribe(movie => {
        expect(movie).toEqual({results: undefined });
        done();
      });
    });
  });
  describe('#popular', () => {
    it('should return an object equal to { results: undefined }', done => {
      spyOn(dbService, 'get').and.returnValue(of({results: undefined}));
      service.popular().subscribe(movie => {
        expect(movie).toEqual({results: undefined });
        done();
      });
    });
  });
});
