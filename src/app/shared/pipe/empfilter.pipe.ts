import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
