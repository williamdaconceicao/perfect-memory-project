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
    const MovieLocal = JSON.parse(localStorage.getItem('movie'));
    for (const props in MovieLocal) {
      if (MovieLocal[props] === 'wish') {
        this.movies.push(props);
      }
    }
  }
}
