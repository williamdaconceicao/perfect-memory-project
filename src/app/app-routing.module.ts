import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: 'seen', loadChildren: () => import('./seen-list/seen-list.module').then(m => m.SeenListModule) },
  { path: 'wish', loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },
  { path: 'search', loadChildren: () => import('./movie-list/movie-list.module').then(m => m.MovieListModule), },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
