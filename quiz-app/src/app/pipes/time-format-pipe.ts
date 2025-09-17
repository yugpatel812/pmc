import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

   transform(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

}
