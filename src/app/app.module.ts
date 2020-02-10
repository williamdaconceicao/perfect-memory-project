import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { FormsModule } from '@angular/forms';
import { ByGenrePipe } from './pipes/bygenre/bygenre.pipe';
import { ByYearPipe } from './pipes/byyear/byyear.pipe';
import { FormatTitlePipe } from './pipes/formatTitle/formatTitle.pipe';
import { API_BASE_URL, API_KEY } from './services/tokens';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeenlistComponent } from './components/seenlist/seenlist.component';
import { ErrorComponent } from './components/error/error.component';
import { FormatSubtitlePipe } from './pipes/formatSubtitle/formatSubtitle.pipe';



// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieCardComponent,
    ByGenrePipe,
    ByYearPipe,
    FormatTitlePipe,
    FormatSubtitlePipe,
    WishlistComponent,
    MovieListComponent,
    SeenlistComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'https://api.themoviedb.org/3' },
    { provide: API_KEY, useValue: '3d50a317456bb9c2c28d3f0956c86cc3' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
