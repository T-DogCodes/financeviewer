import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../../../models/article.model";

@Pipe({
  name: 'sumEntryArticles'
})
export class SumEntryArticlesPipe implements PipeTransform {

  transform(articles: Article[]): number {
    return articles.reduce((sum, article) => sum + article.amount, 0);
  }

}
