import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seenlist',
  templateUrl: './seenlist.component.html',
  styleUrls: ['./seenlist.component.css']
})
export class SeenlistComponent implements OnInit {
  public movies: string[];

  constructor() {
    this.movies = [];
   }


  ngOnInit() {
    for (const props in localStorage) {
      if (localStorage[props] === 'seen') {
        this.movies.push(props);
      }
    }
  }

}
