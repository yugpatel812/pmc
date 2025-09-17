import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
    standalone: true

})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, targetUnit: 'C' | 'F'): number {
    if (targetUnit === 'F') {
      return (value * 9/5) + 32;
    }
    return value;
  }
}
