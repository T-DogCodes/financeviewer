import {Article} from "./article.model";

export interface Entry {
  storeName: string,
  date: Date,
  articles: Article[]
}


