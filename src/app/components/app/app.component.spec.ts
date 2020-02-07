import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from 'src/app/services/translate/translate.service.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translate: TranslateService;
  let translateSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
      ],
    });

    translate = TestBed.get(TranslateService);
    translateSpy = spyOn(translate, 'getBrowserLang');
    jasmine.getEnv().allowRespy(true);
  });

  it('can have lang set to fr', () => {
    translateSpy.and.returnValue('fr');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(translate.currentLang).toEqual('fr');
  });

  beforeEach(() => {
    translateSpy.and.returnValue('de');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Perfect Memory movie search');
  });

  it(`should have as title 'PerfectMemoryProject'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PerfectMemoryProject');
  });

  it('should init with showNav at false', () => {
    expect(component.showNav).toBeFalsy();
  });

  it('should init with urlSearch as empty string', () => {
    expect(component.urlSearch).toEqual('');
  });

  it('can have lang set to en', () => {
    expect(translate.currentLang).toEqual('en');
  });


  describe('#toggleNav', () => {
    it('should set showNav to true', () => {
      component.toggleNav();
      expect(component.showNav).toBeTruthy();
    });
  });
});
