import { Pipe, PipeTransform } from '@angular/core';
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../models/article.model";

@Pipe({
  name: 'sumEntryPrice'
})
export class SumEntryPricePipe implements PipeTransform {

  constructor(private articleService: ArticleService) {
  }

  transform(articles: Article[]): number {
    return this.articleService.getPriceOfArticles(articles)
  }

}
