import { MovieService } from './movie.service';
import { TestBed } from '@angular/core/testing';
import { TheMovieDbService } from '../themovidedb/themovidedb.service';
import { MockTheMovieDbService } from '../themovidedb/themoviedb.service.mock';
import { of, throwError } from 'rxjs';

describe('MovieService', () => {
  let service: MovieService;
  let dbService: TheMovieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService }
      ]
    });

    service = TestBed.get(MovieService);
    dbService = TestBed.get(TheMovieDbService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('should return an object equal to { results: Movie[] }', done => {
      spyOn(dbService, 'get').and.returnValue(of({results: [{
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      },
      {
        id: 2,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }]}));
      service.search({ query: 'test' }).subscribe(movie => {
        expect(movie).toEqual({results: [{
          id: 1,
          original_title: '',
          poster_path: '',
          release_date: '',
          runtime: 0,
          vote_average: 0,
        },
        {
          id: 2,
          original_title: '',
          poster_path: '',
          release_date: '',
          runtime: 0,
          vote_average: 0,
        }]});
        done();
      });
    });

    it('should fetch a list of movies by a title', done => {
      spyOn(dbService, 'get').and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      },
      {
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }));
      service.search({ query: 'test' }).subscribe(() => {
        expect(dbService.get).toHaveBeenCalledWith('/search/movie', { query: 'test' });
        done();
      });
    });

  }),

  describe('popular', () =>{
    it('should return an object containing equal to { results: Movie[] } containing the popular movie', done => {
      spyOn(dbService, 'get').and.returnValue(of({results: [{
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      },]}));
      service.popular().subscribe(popular => {
        expect(popular).toEqual({results: [{
          id: 1,
          original_title: '',
          poster_path: '',
          release_date: '',
          runtime: 0,
          vote_average: 0,
        }]});
        done();
      });
    });
  }),

  describe('searchMovie', () => {
    it('should return movie details', done => {
      spyOn(dbService, 'get').and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      },
      {
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }));
      service.searchMovie({ id: 'test' }).subscribe(credit => {
        expect(credit).toEqual({
          id: 1,
          original_title: '',
          poster_path: '',
          release_date: '',
          runtime: 0,
          vote_average: 0,
        });
        done();
      });
    });

    it('should fetch the movie by its id', done => {
      spyOn(dbService, 'get').and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      },
      {
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }));
      service.searchMovie({ id: 'test' }).subscribe(() => {
        expect(dbService.get).toHaveBeenCalledWith('/movie/test');
        done();
      });
    });
  });
});
