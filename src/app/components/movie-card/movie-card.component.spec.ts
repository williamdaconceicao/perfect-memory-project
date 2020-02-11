import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TheMovieDbService } from 'src/app/services/themovidedb/themovidedb.service';
import { MockTheMovieDbService } from 'src/app/services/themovidedb/themoviedb.service.mock';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { CreditService } from 'src/app/services/credits/credits.service';
import { MockCreditService } from 'src/app/services/credits/credit.service.mock';
import { FormatTimePipe } from 'src/app/pipes/formatTime/formatTime.pipe';
import { FormatTitlePipe } from 'src/app/pipes/formatTitle/formatTitle.pipe';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let showEl: DebugElement;
  let creditService: CreditService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        MovieCardComponent,
        FormatTimePipe,
        FormatTitlePipe,
      ],
      providers: [
        { provide: TheMovieDbService, useClass: MockTheMovieDbService },
        { provide: CreditService, useClass: MockCreditService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    showEl = fixture.debugElement;

    creditService = TestBed.get(CreditService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with showMePartially at false', () => {
    expect(component.showMePartially).toBeFalsy();
  });

  it('should be possible have showMePartially at true', () => {
    component.showMePartially = true;
    expect(component.showMePartially).toBeTruthy();
  });

  it('should init with id undefined', () => {
    expect(component.id).toBeUndefined();
  });

  it('should be possible to have an id', () => {
    component.id = '';
    expect(component.id).toBeDefined();
  });

  describe('#ngOnInit', () => {
    it('should get the cast', done => {
      spyOn(creditService, 'searchCredit').and.returnValue(of({
        id: 1,
        cast: [],
        crew: []
      }));
      component.id = 'toto';
      component.ngOnInit();
      component.data$.subscribe(result => {
        expect(result).toEqual({
          id: 1,
          cast: [],
          crew: []
        });
        done();
      });
    });

    it('should get the director', done => {
      spyOn(creditService, 'searchCredit').and.returnValue(of(
        {
          id: 1,
          cast: [],
          crew: [
            {
              job: 'Director',
              name: 'toto',
            },
          ],
        }
      ));
      component.id = '';
      component.ngOnInit();
      component.director$.subscribe(result => {
        expect(result).toEqual('toto');
        done();
      });
    });

    it('should return Unknown Director when none is found', done => {
      spyOn(creditService, 'searchCredit').and.returnValue(of(
        {
          id: 1,
          cast: [],
          crew: [],
        }
      ));
      component.id = '';
      component.ngOnInit();
      component.director$.subscribe(result => {
        expect(result).toEqual('Unknown director');
        done();
      });
    });
  });

  describe('#toogleChild', () => {
    it('should change the value of showMePartially to his oposite', () => {
      component.toggleChild();
      expect(component.showMePartially).toEqual(true);
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

});
