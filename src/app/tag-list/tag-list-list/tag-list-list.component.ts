import { Component, OnInit } from '@angular/core';
import {TagListService} from "../service/tag-list.service";

@Component({
  selector: 'app-tag-list-list',
  templateUrl: './tag-list-list.component.html',
  styleUrls: ['./tag-list-list.component.scss']
})
export class TagListListComponent implements OnInit {

  constructor(
    public tagListService: TagListService
  ) { }

  ngOnInit(): void {
  }

}
