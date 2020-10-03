import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinDateCount'
})
export class JoinDateCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
