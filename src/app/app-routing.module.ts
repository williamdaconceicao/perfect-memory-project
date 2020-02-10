import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeenlistComponent } from './components/seenlist/seenlist.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'search',
    component: MovieListComponent,
  },
  {path: 'search/:name', component: MovieListComponent},
  {path: 'wish', component: WishlistComponent},
  {path: 'seen', component: SeenlistComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
