import { TheMovieDbService } from '../themovidedb/themovidedb.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { API_KEY, API_BASE_URL } from '../tokens';
import { TestBed } from '@angular/core/testing';
import { throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


describe('TheMovieDbService', () => {
  let service: TheMovieDbService;
  let httpClient: HttpClient;
  let apiKey: string;
  let baseUrl: string;

  beforeEach(() => {
    apiKey = 'toto';
    baseUrl = 'https://api.themoviedb.org/3';
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: API_KEY, useValue: apiKey },
        { provide: API_BASE_URL, useValue: baseUrl }
      ]
    });
    httpClient = TestBed.get(HttpClient);
    service = new TheMovieDbService(httpClient, baseUrl, apiKey);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });


  describe('get', () => {
    let spyGet: jasmine.Spy;

    beforeEach(() => {
      spyGet = spyOn(httpClient, 'get');
    });

    it('should call the API', () => {
      spyGet.and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }));
      service.get('/movie/300').subscribe();
      expect(httpClient.get).toHaveBeenCalledWith(`${baseUrl}/movie/300?api_key=${apiKey}&`);
    });

    it('should throw an error when the API throw an error', done => {
      spyGet.and.returnValue(throwError(new Error('404')));
      service.get('/').subscribe({
        error: err => {
          expect(err).toEqual(jasmine.any(Error));
          done();
        }
      });
    });

    it('can have some keys passed as parameters', () => {
      spyGet.and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        runtime: 0,
        vote_average: 0,
      }));
      service.get('/movie/300', { toto: 'test' }).subscribe();
      expect(httpClient.get)
        .toHaveBeenCalledWith(`${baseUrl}/movie/300?api_key=${apiKey}&toto=test`);
    });
  });
});
