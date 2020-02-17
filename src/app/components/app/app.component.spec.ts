import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '@app/services/translate/translate.service.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PerfectMemoryProject'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PerfectMemoryProject');
  });

  it('should init with showNav at false', () => {
    expect(component.showNav).toBeFalsy();
  });

  describe('#toggleNav', () => {
    it('should set showNav to true', () => {
      component.toggleNav();
      expect(component.showNav).toBeTruthy();
    });
  });
});
