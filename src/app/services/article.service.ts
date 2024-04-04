import {Injectable} from '@angular/core';
import {Article} from "../models/article.model";
import {Discount} from "../models/discount.model";

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

  public getPriceOfArticle(article: Article) {
    return this.calculateSingleArticlePrice(article) * article.amount
  }

  private calculateSingleArticlePrice(article: Article): number {
    let price = article.price;
    article.discounts
      .filter(discount => discount.amount != undefined)
      .forEach(discount => price = this.applyDiscount(price, discount));
    article.discounts
      .filter(discount => discount.percentage != null)
      .forEach(discount => price = this.applyDiscount(price, discount));

    return price;
  }

  private applyDiscount(price: number, discount: Discount): number {
    if (discount.amount != null) {
      return price + discount.amount
    } else if (discount.percentage != null) {
      return price * (1 - (discount.percentage/100))
    } else  {
      throw new Error("Illegal State. Discount must either have percentage or amount")
    }
  }

  public getArticleCount(articles: Article[]) : number {
    return articles.reduce((sum, article) => sum + article.amount, 0);
  }
}
