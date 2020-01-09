import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byname'
})

export class ByNamePipe implements PipeTransform {
	// Here's the filter by name pipe
	// First we check if the list or the text is empty to prevent the bugs
	// next we put the list and the text to uppercase to prevent the accents and we search every element on the list that include the text on their names 
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toUpperCase();
		return items.filter( (item) => item.name.toUpperCase().includes(searchText));
  }
}