import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byyear'
})
export class ByYearPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
