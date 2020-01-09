import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { FormsModule } from '@angular/forms';
import { ByNamePipe } from './pipes/byname/byname.pipe';
import { ByYearPipe } from './pipes/byyear/byyear.pipe';
import { API_BASE_URL, API_KEY } from './services/tokens';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieCardComponent,
    ByNamePipe,
    ByYearPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'https://api.themoviedb.org/3' },
    { provide: API_KEY, useValue: '3d50a317456bb9c2c28d3f0956c86cc3' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
