import {Component, Input, OnInit} from '@angular/core';
import {TagListEntry} from "../../models/tag-list-entry.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() tagListEntry!: TagListEntry;

  constructor() { }

  ngOnInit(): void {

  }

}
