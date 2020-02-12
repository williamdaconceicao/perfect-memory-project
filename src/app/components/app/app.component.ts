import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import '@Stylesheet/Component/app/app.component.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './../../../assets/stylesheet/Component/app/app.component.scss',
  ],
})

export class AppComponent {
  title = 'PerfectMemoryProject';
  /**
   * @internal
   */
  public showNav = false;
  public urlSearch  = '';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  public toggleNav(): void {
    this.showNav = !this.showNav;
  }


}
