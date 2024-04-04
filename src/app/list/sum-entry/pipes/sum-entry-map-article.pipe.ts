import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from "../../../models/entry.model";
import {Article} from "../../../models/article.model";

@Pipe({
  name: 'sumEntryMapArticle'
})
export class SumEntryMapArticlePipe implements PipeTransform {

  transform(data: Entry[]): Article[] {
    return data.flatMap(entry => entry.articles);
  }

}
