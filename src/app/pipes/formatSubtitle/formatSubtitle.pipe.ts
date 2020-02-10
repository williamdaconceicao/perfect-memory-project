import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSubtitle'
})

export class FormatSubtitlePipe implements PipeTransform {
  transform(title: string): string {
    if (!title) { return 'No Title'; }
    let tmp = title.replace(/(>)/g, `<span class="spantitle">></span>`);
    return tmp.replace(/(o)/g, '<span class="spantitle">o</span>');
  }
}
