import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByYearPipe } from './byyear/byyear.pipe';
import { ByGenrePipe } from './bygenre/bygenre.pipe';
import { FormatTimePipe } from './formatTime/formatTime.pipe';
import { FormatTitlePipe } from './formatTitle/formatTitle.pipe';



@NgModule({
  declarations: [
    ByYearPipe,
    ByGenrePipe,
    FormatTimePipe,
    FormatTitlePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ByYearPipe,
    ByGenrePipe,
    FormatTimePipe,
    FormatTitlePipe,
  ]
})
export class PipesModule { }
