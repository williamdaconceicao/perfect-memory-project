import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '@model/Movie.model';
import { Router } from '@angular/router';
import { GenreService } from '@app/services/genres/genres.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input()
  public searchYear: string;
  @Input()
  public searchGenre: Genre;
  @Input()
  public urlSearch: string;

  public showYear = true;
  public showCategory = true;
  public showSearch = true;

  public genresList: Genre[];

  constructor(
    private router: Router,
    private genreService: GenreService) {
    this.genresList = this.genreService.genreList;
  }

  public submit(value: string): void {
    this.router.navigateByUrl('/search/' + value);
  }

  public toogleFilter(value: string) {
    switch (value) {
      case 'search': { this.showSearch = !this.showSearch; break; }
      case 'year': { this.showYear = !this.showYear; break; }
      case 'category': { this.showCategory = !this.showCategory; break; }
      default: { return null; }
    }
  }
}
