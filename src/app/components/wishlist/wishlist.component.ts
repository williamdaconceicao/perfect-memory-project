import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public movies: string[] = [];

  constructor() {}

  ngOnInit() {
    const movieLocal = JSON.parse(localStorage.getItem('movie'));
    for (const props in movieLocal) {
      if (movieLocal[props] === 'wish') {
        this.movies.push(props);
      }
    }
  }
}
