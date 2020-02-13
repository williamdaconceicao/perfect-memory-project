import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';


const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: '/:name', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
