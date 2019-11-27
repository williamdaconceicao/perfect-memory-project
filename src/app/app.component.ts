import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 	title = 'perfect-memory-project';
  private url: string;
  movies = [
      {
          name: 'Forrest Gump',
          id: 13
      },
      {
          name: 'Shutter Island',
          id: 11324
      },
      {
          name: 'Inception',
          id: 27205
      },
      {
          name: 'The Wolf of Wall Street',
          id: 106646
      },
      {
          name: 'The Prestige',
          id: 1124
      },
      {
          name: 'Pride & Prejudice',
          id: 4348
      },
      {
          name: 'Moana',
          id: 277834
      },
      {
          name: 'Sin City',
          id: 187
      },
      {
          name: '2001: A Space Odyssey',
          id: 62
      },
      {
          name: 'The Green Mile',
          id: 497
      }
  ];
  constructor(private http: HttpClient){}
  performSearch(name: string){
    this.url = "https://api.themoviedb.org/3/search/movie?api_key=3d50a317456bb9c2c28d3f0956c86cc3&query="+name;
    this.showData();
  }

  getData(){
    console.log(this.url)
    return this.http.get(this.url);
  }

  showData(){
    this.getData()
    .subscribe((data) => {
      console.log(data)
    });
  }
}
