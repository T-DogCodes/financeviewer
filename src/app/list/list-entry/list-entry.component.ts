import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../../models/entry.model";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent implements OnInit {

  @Input() entry: Entry | undefined

  open: boolean = false

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
  }

  getArticleSum(entry: Entry) {
    return this.articleService.getArticleCount(entry.articles)
  }

  toggleArticleList() {
    this.open = !this.open
  }

  getArticlePriceSum(article: Article) {
    return this.articleService.getPriceOfArticle(article)
  }
}
