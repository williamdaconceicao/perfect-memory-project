import { TranslateServiceMock, TranslateMockPipe, TranslateMockDirective } from './translate.service.mock';
import { ElementRef } from '@angular/core';


describe('TranslateServiceMock', () => {
  let service: TranslateServiceMock;

  beforeEach(() => {
    service = new TranslateServiceMock();
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('should return the translation of a content', () => {
    service.get('test').subscribe(result => {
      expect(result).toEqual('i18ntest');
    });
  });

  it('should return the translation', () => {
    service.getTranslation().subscribe(result => {
      expect(result).toEqual({});
    });
  });

  it('should be able to use a lang', () => {
    service.use('fr');
    expect(service.currentLang).toEqual('fr');
    expect(service.onLangChangeSubject).toBeDefined();
  });

  it('should be able to add languages', () => {
    service.addLangs(['fr', 'en']);
    expect(service.languages).toEqual(['de', 'fr', 'en']);
  });

  it('should return the BrowserLang', () => {
    expect(service.getBrowserLang()).toEqual('');
  });

  it('should get the instant with a string', () => {
    expect(service.instant('test')).toEqual('i18ntest');
  });

  it('should get the instant with an array of string', () => {
    expect(service.instant(['test', 'test'])).toEqual('i18ntest,test');
  });

  it('should be able to set a DefaultLang', () => {
    service.setDefaultLang('fr');
    expect(service.onDefaultLangChangeSubject).toBeDefined();
  });

  it('shout get the languages', () => {
    expect(service.getLangs()).toEqual(['de']);
  });
});

describe('TranslateMockPipe', () => {
  let pipe: TranslateMockPipe;

  describe('#transform', () => {
    beforeEach(() => {
      pipe = new TranslateMockPipe();
    });

    it('should return the filtered string with text passed in', () => {
      expect(pipe.transform('test')).toEqual('test-i18n');
    });

    it('should return the filtered string without a text passed in', () => {
      expect(pipe.transform('')).toEqual('i18n');
    });
  });
});

describe('TranslateMockDirective', () => {
  let service: TranslateMockDirective;
  let test: ElementRef;

  beforeEach(() => {
    test = {
      nativeElement: {
        innerText: '',
      },
    };
    service = new TranslateMockDirective(test);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  describe('#ngAfterViwChecked', () => {
    it('should set the innerText to TRANSLATED_STRING', () => {
      service.ngAfterViewChecked();
      expect(test.nativeElement.innerText).toEqual('i18n');
    });
  });
});
