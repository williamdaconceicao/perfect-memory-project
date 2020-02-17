import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '@model/Movie.model';
import { Router } from '@angular/router';

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

  public genresList: Genre[] = [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 14, name: 'Fantasy'},
    {id: 36, name: 'History'},
    {id: 27, name: 'Horror'},
    {id: 10402, name: 'Music'},
    {id: 9648, name: 'Mystery'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 10770, name: 'TV Movie'},
    {id: 53, name: 'Thriller'},
    {id: 10752, name: 'War'},
    {id: 37, name: 'Western'},
  ];

  constructor(private router: Router) { }

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
