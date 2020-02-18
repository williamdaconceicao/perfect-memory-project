import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  public title = 'PerfectMemoryProject';
  /**
   * @internal
   */
  public showNav = false;

  public toggleNav() {
    this.showNav = !this.showNav;
  }
}
