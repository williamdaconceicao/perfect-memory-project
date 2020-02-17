import { ComponentFixture, TestBed, fakeAsync, tick, } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TheMovieDbService } from '@app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from '@app/services/themovidedb/themoviedb.service.mock';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '@app/services/movie/movie.service';
import { MockMovieService } from '@app/services/movie/movie.service.mock';
import { FormsModule } from '@angular/forms';
import { ByYearPipe } from '@app/pipes/byyear/byyear.pipe';
import { ByGenrePipe } from '@app/pipes/bygenre/bygenre.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { FormatTitlePipe } from '@app/pipes/formatTitle/formatTitle.pipe';
import { Location } from '@angular/common';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let showEl: DebugElement;
  let movieService: MovieService;
  let router: Router;
  let route: ActivatedRoute;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: class TestComponent1 {},
          },
          {
            path: 'search/title',
            component: class TestComponent2 {},
          }
        ]),
      ],
      declarations: [
        MovieListComponent,
        ByYearPipe,
        ByGenrePipe,
        FormatTitlePipe,
      ],
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService },
        { provide: MovieService, useClass: MockMovieService },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
    movieService = TestBed.get(MovieService);
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    showEl = fixture.debugElement;
    router.initialNavigation();

    route = TestBed.get(ActivatedRoute);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should get the populars movies with route /', done => {
      router.navigate(['']);
      spyOn(movieService, 'popular').and.returnValue(of({results: [{
        id: 1,
        original_title: 'popular1',
        poster_path: '',
        release_date: '',
        genre_ids: [1, 2],
        runtime: 0,
        vote_average: 0,
      },
      {
        id: 2,
        original_title: 'popular2',
        poster_path: '',
        release_date: '',
        genre_ids: [1, 2],
        runtime: 0,
        vote_average: 0,
      }]}));
      component.ngOnInit();
      component.movies$.subscribe(result => {
        expect(result).toEqual([{
          id: 1,
          original_title: 'popular1',
          poster_path: '',
          release_date: '',
          genre_ids: [1, 2],
          runtime: 0,
          vote_average: 0,
        },
        {
          id: 2,
          original_title: 'popular2',
          poster_path: '',
          release_date: '',
          genre_ids: [1, 2],
          runtime: 0,
          vote_average: 0,
        }]);
        done();
      });
    });

    it('should get a list of movies', done => {
      route.params.subscribe(param => {
        param.name = 'title';
        router.navigateByUrl('/search/' + 'title').then(() => {
          spyOn(movieService, 'search').and.returnValue(of({results: [{
            id: 1,
            original_title: 'title1',
            poster_path: '',
            release_date: '',
            genre_ids: [1, 2],
            runtime: 0,
            vote_average: 0,
          },
          {
            id: 2,
            original_title: 'title2',
            poster_path: '',
            release_date: '',
            genre_ids: [1, 2],
            runtime: 0,
            vote_average: 0,
          }]}));
          component.ngOnInit();
          component.movies$.subscribe(result => {
            expect(result).toEqual([{
              id: 1,
              original_title: 'title1',
              poster_path: '',
              release_date: '',
              genre_ids: [1, 2],
              runtime: 0,
              vote_average: 0,
            },
            {
              id: 2,
              original_title: 'title2',
              poster_path: '',
              release_date: '',
              genre_ids: [1, 2],
              runtime: 0,
              vote_average: 0,
            }]);
            done();
          });
        });
      });
    });
  });
});
