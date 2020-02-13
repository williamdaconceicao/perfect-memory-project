import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { PipesModule } from '@app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MovieComponent,
    MovieCardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    MovieComponent,
    MovieCardComponent,
    SearchComponent,
  ],
})
export class ComponentsModule { }
