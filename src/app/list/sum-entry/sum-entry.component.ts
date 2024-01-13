import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../../models/entry.model";

@Component({
  selector: 'app-sum-entry',
  templateUrl: './sum-entry.component.html',
  styleUrls: ['./sum-entry.component.scss']
})
export class SumEntryComponent implements OnInit {

  @Input() data: Entry[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
