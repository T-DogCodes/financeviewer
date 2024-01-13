import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from "../../../models/entry.model";

@Pipe({
  name: 'filterStore'
})
export class FilterStorePipe implements PipeTransform {

  transform(entries: Entry[]): string[] {
    return entries.map(entry => entry.storeName)
      .filter(this.onlyUnique.bind(this))
      .sort()
  }

  private onlyUnique<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index;
  }

}
