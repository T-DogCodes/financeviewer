import { Injectable } from '@angular/core';
import {TagListEntry} from "../models/taglist-entry.model";
import {Tag} from "../models/tag.model";
import {TagList} from "../models/taglist.model";

@Injectable({
  providedIn: 'root'
})
export class TagListService {

  constructor() { }

  private tagList: TagList | undefined;

  public hasTagList() : boolean {
    return this.tagList != undefined;
  }

  public getTagListEntries() {

  }

}
