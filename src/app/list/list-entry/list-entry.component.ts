import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../../models/entry.model";

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent implements OnInit {

  @Input() entry: Entry | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
