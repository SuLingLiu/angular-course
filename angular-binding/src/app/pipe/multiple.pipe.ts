import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
  //参数一：输入值，原始值，参数二：参数
  transform(value: number, args?: any): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}
