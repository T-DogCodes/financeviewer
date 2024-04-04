import {Injectable} from '@angular/core';
import {TagList} from "../models/tag-list.model";
import {ArticleService} from "../../services/article.service";
import {DataService} from "../../services/data.service";
import {TagListEntry} from "../models/tag-list-entry.model";
import {Tag} from "../models/tag.model";
import {Entry} from "../../models/entry.model";
import {invert} from "../../shared/utils";

@Injectable({
  providedIn: 'root'
})
export class TagListImporterService {

  constructor(private dataService: DataService) {
  }

  public importTagList(rawTagList: any): TagList {
    if (!this.dataService.hasData()) {
      throw new Error("No Data Available. Illegal State");
    }

    const rawTagListEntries = this.checkRawEntries(rawTagList.entries ?? []);

    return {
      ...this.getEntries(rawTagListEntries),
      tags: this.checkRawTags(rawTagList.tags ?? [])
    }
  }

  private checkRawTags(rawTags: any[]): {[key:string]:Tag} {
    if (!Array.isArray(rawTags)) {
      throw new Error("The tags must be an array");
    }
    return rawTags.map(this.checkRawTag.bind(this))
      .reduce((a, b) => ({...a, [b.name]:b}), {} as {[key:string]:Tag});
  }

  private checkRawTag(rawTag: any): Tag {
    if (rawTag.name == null) {
      throw new Error(`Tag ${rawTag.name} - ${rawTag.color} is missing tagName`)
    } else if (rawTag.color == null) {
      throw new Error(`Tag ${rawTag.name} - ${rawTag.color} is missing color`)
    }
    return {
      name: rawTag.name,
      color: rawTag.color
    }
  }

  private checkRawEntries(rawEntries: any[]): TagListEntry[] {
    if (!Array.isArray(rawEntries)) {
      throw new Error("The entries must be an array");
    }
    return rawEntries.map(this.checkRawEntry.bind(this));
  }

  private checkRawEntry(rawEntry: any): TagListEntry {
    if (rawEntry.storeName == null) {
      throw new Error(`Entry ${rawEntry.storeName} - ${rawEntry.name} is missing storeName`)
    } else if (rawEntry.name == null) {
      throw new Error(`Entry ${rawEntry.storeName} - ${rawEntry.name} is missing name`)
    }
    return {
      name: rawEntry.name,
      storeName: rawEntry.storeName,
      tags: rawEntry.tags ?? []
    }
  }

  private getEntries(rawTagListEntries: TagListEntry[]) {
    const dataTagList = this.getDataTagList();

    return {
      existingTagListEntries: rawTagListEntries
        .filter(this.isPresentInTagList.bind(this, dataTagList)),
      removingTagListEntries: rawTagListEntries
        .filter(invert.bind(this, this.isPresentInTagList, dataTagList)),
      newTagListEntries: dataTagList
        .filter(invert.bind(this, this.isPresentInTagList, rawTagListEntries)),
    };
  }

  private isPresentInTagList(list: TagListEntry[], entry: TagListEntry): boolean {
    return list.filter(this.areTagsListEntriesEqual.bind(this, entry)).length > 0;
  }

  private areTagsListEntriesEqual(entry1: TagListEntry, entry2: TagListEntry) {
    return entry1.storeName == entry2.storeName && entry1.name == entry2.name
  }

  private getDataTagList(): TagListEntry[] {
    return this.dataService.getData()
      .flatMap(entry => entry.articles
        .map(article => ({storeName: entry.storeName, name: article.name, tags: []}))
      )
  }


}
