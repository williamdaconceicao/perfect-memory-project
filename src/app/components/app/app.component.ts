import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
