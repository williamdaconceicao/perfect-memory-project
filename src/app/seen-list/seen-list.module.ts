import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeenListRoutingModule } from './seen-list-routing.module';
import { SeenlistComponent } from '@app/components/seenlist/seenlist.component';
import { PipesModule } from '@app/pipes/pipes.module';
import { ComponentsModule } from '@app/components/components.module';


@NgModule({
  declarations: [SeenlistComponent],
  imports: [
    CommonModule,
    SeenListRoutingModule,
    PipesModule,
    ComponentsModule,
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SeenListModule { }
