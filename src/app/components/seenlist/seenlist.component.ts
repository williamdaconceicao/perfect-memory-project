import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seenlist',
  templateUrl: './seenlist.component.html',
  styleUrls: ['./seenlist.component.css']
})
export class SeenlistComponent implements OnInit {
  public movies: string[] = [];

  constructor() { }

  ngOnInit() {
    const movieLocal = JSON.parse(localStorage.getItem('movie'));
    for (const props in movieLocal) {
      if (movieLocal[props] === 'seen') {
        this.movies.push(props);
      }
    }
  }
}
