import {Injectable} from '@angular/core';
import {Article} from "../models/article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public getPriceOfArticles(articles: Article[]): number {
    return articles
      .map(this.getPriceOfArticle.bind(this))
      .reduce((sum, price) => sum + price, 0)
  }

  public getPriceOfArticle(article: Article): number {
    const price = article.price * article.amount;
    if (!article.discount) {
      return price
    } else if (article.discount.amount != null) {
      return price + article.discount.amount
    } else {
      return price * (1 - (article.discount.percentage!! / 100))
    }
  }

  public getArticleCount(articles: Article[]) : number {
    return articles.reduce((sum, article) => sum + article.amount, 0);
  }
}
