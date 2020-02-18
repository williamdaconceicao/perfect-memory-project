import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '@model/Movie.model';
import { GenreService } from '@app/services/genres/genres.service';
import { LocalStorageService } from '@app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent implements OnInit {

  @Input()
  public urlSearch: string;

  public movies: string[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    try {
      this.movies = this.localStorageService.initList('wish');
    } catch {
      this.movies = [];
    }
  }
}
