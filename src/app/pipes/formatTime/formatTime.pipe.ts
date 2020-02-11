import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})

export class FormatTimePipe implements PipeTransform {
  transform(time: string): string {
    if (!time) { return '0 hr 0 min'; }
    const hours = Math.floor(parseInt(time, 10) / 60);
    const minutes = parseInt(time, 10) % 60;
    return hours + ' hr ' + minutes + ' min';
  }
}
