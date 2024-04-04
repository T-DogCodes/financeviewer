import {Tag} from "./tag.model";
import {TagListEntry} from "./taglist-entry.model";

export interface TagList {
  tagListEntries: TagListEntry[]
  tags: {[key:string]:Tag}
}
