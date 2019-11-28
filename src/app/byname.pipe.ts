import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byname'
})

export class ByNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toUpperCase();
		return items.filter( (item) => item.name.toUpperCase().includes(searchText));
   }
}