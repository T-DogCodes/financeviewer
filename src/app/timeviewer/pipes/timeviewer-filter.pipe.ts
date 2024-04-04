import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeviewerFilter'
})
export class TimeviewerFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
