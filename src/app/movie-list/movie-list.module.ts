import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { PipesModule } from '@app/pipes/pipes.module';
import { ComponentsModule } from '@app/components/components.module';
import { MovieComponent } from '@app/components/movie/movie.component';
import { MovieCardComponent } from '@app/components/movie-card/movie-card.component';
import { SearchComponent } from '@app/components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    MovieListRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class MovieListModule { }
