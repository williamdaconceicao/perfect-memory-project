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

  constructor() {}

  public toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
