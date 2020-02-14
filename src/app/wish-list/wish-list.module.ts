import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishlistComponent } from '@app/components/wishlist/wishlist.component';
import { PipesModule } from '@app/pipes/pipes.module';
import { ComponentsModule } from '@app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    WishListRoutingModule,
    PipesModule,
    ComponentsModule,
    FormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WishListModule { }
