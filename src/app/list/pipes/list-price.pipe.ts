import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../../models/article.model";
import {Entry} from "../../models/entry.model";

@Pipe({
  name: 'listPrice'
})
export class ListPricePipe implements PipeTransform {

  transform(value: Entry, ...args: unknown[]): number {
    return value.articles.reduce((sum, article) => sum + article.price, 0)
  }

}
