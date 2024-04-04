import {Injectable} from '@angular/core';
import {Entry} from "../models/entry.model";
import {Article} from "../models/article.model";
import {Discount} from "../models/discount.model";

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor() {
  }

  public mapFilesToData(filesData: any[][]): Entry[] {
    return filesData.flatMap(this.mapFileToData.bind(this))
  }

  public mapFileToData(fileData: any[]): Entry[] {
    return fileData.map(this.mapEntry.bind(this))
  }

  private mapEntry(entry: any): Entry {
    if (entry.storeName == null || entry.date == null || entry.articles == null) {
      throw new Error(`Invalid formed entry store: ${entry.storeName}, date: ${entry.storeName}, articles: ${entry.articles == null ? "null" : entry.articles.length}`)
    }

    function mapArticles(articles: any[]): Article[] {
      return articles.map(mapArticle)
    }
    function mapDiscount(discount: any, discounts: any[]): Discount[] {
      if (discount != undefined && discounts != undefined) {
        throw new Error("Invalid formed entry. There cannot be a discount and a discounts field at the same time")
      } else if (discount != null) {
        return [discount]
      } else if (discounts != null) {
        return discounts
      } else {
        return [];
      }
    }

    function mapArticle(article: any): Article {
      if (article.name == null || article.price == null) {
        throw new Error(`Invalid formed article in entry ${entry.storeName} at date ${entry.date} with name ${article.name}, price ${article.price}`)
      }
      return {
        name: article.name,
        price: article.price,
        amount: article.amount ?? 1,
        discounts: mapDiscount(article.discount, article.discounts)
      }
    }

    return {
      storeName: entry.storeName,
      date: new Date(entry.date),
      articles: mapArticles(entry.articles)
    }
  }
}
