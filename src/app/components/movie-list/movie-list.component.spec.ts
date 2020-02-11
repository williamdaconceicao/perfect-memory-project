import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TheMovieDbService } from 'src/app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from 'src/app/services/themovidedb/themoviedb.service.mock';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from 'src/app/services/movie/movie.service';
import { MockMovieService } from 'src/app/services/movie/movie.service.mock';
import { FormsModule } from '@angular/forms';
import { ByYearPipe } from 'src/app/pipes/byyear/byyear.pipe';
import { ByGenrePipe } from 'src/app/pipes/bygenre/bygenre.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormatTitlePipe } from 'src/app/pipes/formatTitle/formatTitle.pipe';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let showEl: DebugElement;
  let movieService: MovieService;
  let router: Router;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
    movieService = TestBed.get(MovieService);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    showEl = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should get the populars movies with route /', done => {
      router.navigate(['/']);
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

    // it('should get a list of movies', fakeAsync(() => {
    //   router.navigate(['/search/title']);
    //   console.log('hi');
    //   tick();
    //   spyOn(movieService, 'search').and.returnValue(of({results: [{
    //     id: 1,
    //     original_title: 'title1',
    //     poster_path: '',
    //     release_date: '',
    //     genre_ids: [1, 2],
    //     runtime: 0,
    //     vote_average: 0,
    //   },
    //   {
    //     id: 2,
    //     original_title: 'title2',
    //     poster_path: '',
    //     release_date: '',
    //     genre_ids: [1, 2],
    //     runtime: 0,
    //     vote_average: 0,
    //   }]}));
    //   component.ngOnInit();
    //   component.movies$.subscribe(result => {
    //     expect(result).toEqual([{
    //       id: 1,
    //       original_title: 'title1',
    //       poster_path: '',
    //       release_date: '',
    //       genre_ids: [1, 2],
    //       runtime: 0,
    //       vote_average: 0,
    //     },
    //     {
    //       id: 2,
    //       original_title: 'title2',
    //       poster_path: '',
    //       release_date: '',
    //       genre_ids: [1, 2],
    //       runtime: 0,
    //       vote_average: 0,
    //     }]);
    //   });
    // }));
  });

  describe('#submit', () => {
    it('should navigate with to /search/value', () => {
      const spy = spyOn(component, 'submit');
      component.submit('test');
      expect(spy).toHaveBeenCalled();
      //expect(router.url).toEqual('/search/test');
    });
  });
});
