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
    const MovieLocal = JSON.parse(localStorage.getItem('movie'));
    for (const props in MovieLocal) {
      if (MovieLocal[props] === 'seen') {
        this.movies.push(props);
      }
    }
  }
}
