import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/model/Movie.model';

@Pipe({
  name: 'byyear'
})
export class ByYearPipe implements PipeTransform {
  //  Here's the filter by name pipe,
  // First we check if the list or the year is empty to prevent the bugs
  // next we search every element on the list that include the year on their realease date
  transform(items: Movie[], searchYear: string): Movie[] {
    if (!items) { return []; }
    if (!searchYear) { return items; }
    return items
      .filter((item) => item.release_date.split('-')[0].includes(searchYear));
  }
}
