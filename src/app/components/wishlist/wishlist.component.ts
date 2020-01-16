import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public movies: string[];

  constructor() {
    this.movies = [];
   }

  ngOnInit() {
    for (const props in localStorage) {
      if (localStorage[props] === 'wish') {
        this.movies.push(props);
      }
    }
  }

}
