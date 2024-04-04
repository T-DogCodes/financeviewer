import { Injectable } from '@angular/core';
import {TagListEntry} from "../models/tag-list-entry.model";
import {Tag} from "../models/tag.model";
import {TagList} from "../models/tag-list.model";
import {TagListImporterService} from "./tag-list.importer.service";

@Injectable({
  providedIn: 'root'
})
export class TagListService {

  constructor() { }

  private tagList: TagList | undefined;

  public hasTagList() : boolean {
    return this.tagList != undefined;
  }

  public setTagList(tagList: TagList) {
    this.tagList = tagList;
  }

  public getTagByTagName(tagName: string): Tag {
    return this.tagList!!.tags[tagName];
  }

  public setTagOnTagListEntry(storeName: string, articleName: string, tagName: string) {
    const tags = this.getTagListEntry(storeName, articleName).tags;

    if (!tags.includes(tagName)) {
      tags.push(tagName)
    }
  }

  public removeTagFromTagListEntry(storeName: string, articleName: string, tagName: string) {
    const tags = this.getTagListEntry(storeName, articleName).tags;

    if (tags.includes(tagName)) {
      const index = tags.indexOf(tagName);
      tags.slice(index, index);
    }
  }

  private getAllTagListEntries() {
    return [...this.tagList?.existingTagListEntries!!, ...this.tagList?.newTagListEntries!!, ...this.tagList?.removingTagListEntries!!]
  }

  private getTagListEntry(storeName: string, articleName: string) {
    return this.getAllTagListEntries()
      .filter(entry => entry.name == articleName && entry.storeName == storeName)
      [0]
  }

  public get newTagListEntries() {
    return this.tagList?.newTagListEntries!!
  }

  public get existingTagListEntries() {
    return this.tagList?.existingTagListEntries!!
  }

  public get removingTagListEntries() {
    return this.tagList?.removingTagListEntries!!
  }

}
