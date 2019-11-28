import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  private url: string;
  movies = [
      {
          name: 'Forrest Gump',
          id: 13,
          date: '1994-07-06',
      },
      {
          name: 'Shutter Island',
          id: 11324,
          date: '2010-02-14'
      },
      {
          name: 'Inception',
          id: 27205,
          date: '2010-07-15',
      },
      {
          name: 'The Wolf of Wall Street',
          id: 106646,
          date: '2013-12-25'
      },
      {
          name: 'The Prestige',
          id: 1124,
          date: '2006-10-19',
      },
      {
          name: 'Pride & Prejudice',
          id: 4348,
          date: '2005-09-16',
      },
      {
          name: 'Moana',
          id: 277834,
          date: '2016-11-23',
      },
      {
          name: 'Sin City',
          id: 187,
          date: '2005-04-01',
      },
      {
          name: '2001: A Space Odyssey',
          id: 62,
          date: '1968-04-09',
      },
      {
          name: 'The Green Mile',
          id: 497,
          date: '1999-12-10',
      }
  ];

  constructor(private http: HttpClient){}
  
  performSearch(name: string){
    this.url = "https://api.themoviedb.org/3/search/movie?api_key=3d50a317456bb9c2c28d3f0956c86cc3&query="+name;
    this.showData();
  }

  getData(){
    return this.http.get(this.url);
  }

  showData(){
    this.getData()
    .subscribe((data: any) => {
      for (let i = 0; i < 10; i++) {
        this.movies[i].name = data.results[i].original_title
        this.movies[i].id = data.results[i].id
        this.movies[i].date = data.results[i].release_date        
      }
    });
  }
}
