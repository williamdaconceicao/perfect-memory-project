import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byyear'
})
export class ByYearPipe implements PipeTransform {
	transform(items: any[], searchYear: string): any[] {
    if(!items) return [];
    if(!searchYear) return items;
		return items.filter((item) => item.date.split('-')[0].includes(searchYear));
  }
}
