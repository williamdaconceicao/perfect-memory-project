import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist.component';
import { MovieComponent } from '../movie/movie.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { TheMovieDbService } from 'src/app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from 'src/app/services/themovidedb/themoviedb.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        WishlistComponent,
        MovieComponent,
        MovieCardComponent,
      ],
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
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

    it('should fill movies with the wish movies', () => {
      localStorage.setItem('movie', '{"495764":"seen","530915":"wish"}');
      component.ngOnInit();
      expect(component.movies).toEqual(['530915']);
    });

    it('should be possible to have no movie returned', () => {
      component.ngOnInit();
      expect(component.movies).toEqual([]);
    });
  });
});
