import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-entry',
  templateUrl: './tag-entry.component.html',
  styleUrls: ['./tag-entry.component.scss']
})
export class TagEntryComponent implements OnInit {

  @Input() tag!: string

  constructor() { }

  ngOnInit(): void {
  }

}
