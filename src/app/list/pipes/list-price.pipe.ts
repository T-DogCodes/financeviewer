import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../../models/article.model";
import {Entry} from "../../models/entry.model";
import {ArticleService} from "../../services/article.service";

@Pipe({
  name: 'listPrice'
})
export class ListPricePipe implements PipeTransform {

  constructor(
    private articleService: ArticleService
  ) {
  }

  transform(entry: Entry): number {
    return this.articleService.getPriceOfArticles(entry.articles)
  }

}
