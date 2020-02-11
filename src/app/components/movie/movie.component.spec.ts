import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { MovieService } from 'src/app/services/movie/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TheMovieDbService } from 'src/app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from 'src/app/services/themovidedb/themoviedb.service.mock';
import { of } from 'rxjs';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MockMovieService } from 'src/app/services/movie/movie.service.mock';
import { FormatTitlePipe } from 'src/app/pipes/formatTitle/formatTitle.pipe';
import { FormatTimePipe } from 'src/app/pipes/formatTime/formatTime.pipe';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let movieService: MovieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        MovieComponent,
        MovieCardComponent,
        FormatTitlePipe,
        FormatTimePipe,
      ],
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService },
        { provide: MovieService, useClass: MockMovieService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    movieService = TestBed.get(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with showVar at false', () => {
    expect(component.showVar).toBeFalsy();
  });

  it('should init with isSeen defined', () => {
    expect(component.isSeen).toBeDefined();
  });

  it('should init with isWished defined', () => {
    expect(component.isWished).toBeDefined();
  });

  describe('#ngOnInit', () => {
    it('should get a movie', done => {
      spyOn(movieService, 'searchMovie').and.returnValue(of({
        id: 1,
        original_title: '',
        poster_path: '',
        release_date: '',
        genre_ids: [1, 2],
        runtime: 0,
        vote_average: 0,
      }));
      component.id = '';
      component.ngOnInit();
      component.data$.subscribe(result => {
        expect(result).toEqual({
          id: 1,
          original_title: '',
          poster_path: '',
          release_date: '',
          genre_ids: [1, 2],
          runtime: 0,
          vote_average: 0,
        });
        done();
      });
    });
  });

  describe('#addLocal', () => {
    beforeEach(() => {
      component.isSeen = false;
      component.isWished = false;
    });

    it('should set isSeen to true when value is seen', () => {
      component.addLocal('seen');
      expect(component.isSeen).toBe(true);
      expect(component.isWished).toBe(false);
    });

    it('should set isWished to true when value is wish', () => {
      component.addLocal('wish');
      expect(component.isWished).toBe(true);
      expect(component.isSeen).toBe(false);
    });

    it('should change none of isWished and isSeen when value is not wish or seen', () => {
      component.addLocal('');
      expect(component.isWished).toBe(false);
      expect(component.isSeen).toBe(false);
    });

    it('should work even if the local storage is empty', () => {
      localStorage.clear();
      component.addLocal('');
      expect(component.isWished).toBe(false);
      expect(component.isSeen).toBe(false);
    });
  });

  describe('#toggleChild', () => {
    it('should set the showVar value to true', () => {
      component.toggleChild();
      expect(component.showVar).toBeTruthy();
    });
  });
});
