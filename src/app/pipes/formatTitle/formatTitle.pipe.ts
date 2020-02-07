import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})

export class FormatTitlePipe implements PipeTransform {
  transform(title: string): string {
    if (!title) { return 'No Title'; }
    return title.replace(/\s*\(.*?\)\s*/g, '');
  }
}
