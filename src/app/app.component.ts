import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title = 'perfect-memory-project';
  movies = [
      {
          name: 'Forest Gump',
          id: 13
      },
  ]
  toto = [
      {
          name: 'Shutter Island',
          id: 11324
      },
      {
          name: 'Inception',
          id: 27205
      },
      {
          name: 'Le loup de wall street',
          id: 106646
      },
      {
          name: 'Le prestige',
          id: 1124
      },
      {
          name: 'Orgueil et Préjugé',
          id: 4348
      },
      {
          name: 'Vaiana',
          id: 277834
      },
      {
          name: 'Sin city',
          id: 187
      },
      {
          name: "2001, l'Odyssée de l'Espace",
          id: 62
      },
      {
          name: 'La ligne verte',
          id: 497
      }
  ];
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
