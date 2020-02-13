import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeenlistComponent } from './component/seenlist.component';

const routes: Routes = [{ path: '', component: SeenlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeenListRoutingModule { }
