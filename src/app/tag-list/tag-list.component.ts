import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {TagList} from "./models/tag-list.model";
import {TagListService} from "./service/tag-list.service";
import {TagListImporterService} from "./service/tag-list.importer.service";

@Component({
  selector: 'app-taglist',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  tagList: TagList = {
    tags: {},
    existingTagListEntries: [],
    removingTagListEntries: [],
    newTagListEntries: []
  };

  constructor(
    private router: Router,
    private dataService: DataService,
    private tagListImporterService: TagListImporterService,
    private tagListService: TagListService
  ) {
    if (!this.dataService.hasData()) {
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {
    this.tagList = this.tagListImporterService.importTagList({})
  }

  hasTagList() {
    return this.tagListService.hasTagList();
  }

}
