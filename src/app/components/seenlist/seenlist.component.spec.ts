import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenlistComponent } from './seenlist.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieComponent } from '../movie/movie.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TheMovieDbService } from 'src/app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from 'src/app/services/themovidedb/themoviedb.service.mock';

describe('SeenlistComponent', () => {
  let component: SeenlistComponent;
  let fixture: ComponentFixture<SeenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        SeenlistComponent,
        MovieComponent,
        MovieCardComponent,
      ],
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear();
    component.movies = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with movies set to []', () => {
    expect(component.movies).toEqual([]);
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      localStorage.clear();
      component.movies = [];
    });

    it('should fill movies with the seen movies', () => {
      localStorage.setItem('movie', '{"495764":"seen","530915":"wish"}');
      component.ngOnInit();
      expect(component.movies).toEqual(['495764']);
    });

    it('should be possible to have no movie returned', () => {
      component.ngOnInit();
      expect(component.movies).toEqual([]);
    });
  });
});
