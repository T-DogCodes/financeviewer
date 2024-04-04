import {Tag} from "./tag.model";
import {TagListEntry} from "./tag-list-entry.model";

export interface TagList {
  newTagListEntries: TagListEntry[],
  existingTagListEntries: TagListEntry[],
  removingTagListEntries: TagListEntry[]
  tags: {[key:string]:Tag}
}
