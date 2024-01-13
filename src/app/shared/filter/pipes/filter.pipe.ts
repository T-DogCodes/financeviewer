import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from "../../../models/entry.model";
import {FilterValues} from "../models/filter-values.model";
import {ArticleService} from "../../../services/article.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(
    private articleSerivce: ArticleService
  ) {
  }

  transform(data: Entry[], filterValues: FilterValues): Entry[] {
    function filterDateFrom(date: Date) {
      if (filterValues.dateFrom == null) {
        return true
      } else {
        return date.getTime() >= new Date(filterValues.dateFrom).getTime()
      }
    }

    function filterDateTo(date: Date) {
      if (filterValues.dateTo == null) {
        return true
      } else {
        return date.getTime() <= new Date(filterValues.dateTo).getTime()
      }
    }

    function filterMinPrice(price: number) {
      if (filterValues.minPrice == null) {
        return true
      } else {
        return price >= filterValues.minPrice
      }
    }

    function filterMaxPrice(price: number) {
      if (filterValues.maxPrice == null) {
        return true
      } else {
        return price <= filterValues.maxPrice
      }
    }

    function filterStores(store: string) {
      if (filterValues.stores.length == 0) {
        return true
      } else {
        return filterValues.stores.includes(store)
      }
    }

    return data
      .filter(entry => filterDateFrom(entry.date))
      .filter(entry => filterDateTo(entry.date))
      .filter(entry => filterMinPrice(this.articleSerivce.getPriceOfArticles(entry.articles)))
      .filter(entry => filterMaxPrice(this.articleSerivce.getPriceOfArticles(entry.articles)))
      .filter(entry => filterStores(entry.storeName))
  }
}
