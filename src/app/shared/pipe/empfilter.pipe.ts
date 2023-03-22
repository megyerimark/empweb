import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(values: any[], filter:string): any {
    if(!values || !filter){
      return values;

    }
    return values.filter((value)=>value.city == filter);
  }

}
