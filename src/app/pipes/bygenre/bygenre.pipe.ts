import { Pipe, PipeTransform } from '@angular/core';
import { Movie, Genre } from '@model/Movie.model';

@Pipe({
  name: 'bygenre'
})

export class ByGenrePipe implements PipeTransform {
  // Here's the filter by name pipe
  // First we check if the list or the text is empty to prevent the bugs
  // next we put the list and the text to uppercase to prevent the accents and
  // we search every element on the list that include the text on their names
  transform(items: Movie[], selectedGenre: Genre): Movie[] {
    if (!items) { return []; }
    if (!selectedGenre) { return items; }
    return items.filter(item => {
      if (item.genre_ids.some(genre => genre === selectedGenre.id)) {
          return true;
      } else {
          return false;
      }
    });
  }
}
