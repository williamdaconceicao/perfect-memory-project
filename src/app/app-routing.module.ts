import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeenlistComponent } from './components/seenlist/seenlist.component';


const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'wish', component: WishlistComponent},
  {path: 'seen', component: SeenlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
