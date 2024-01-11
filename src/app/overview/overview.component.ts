import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Entry} from "../models/entry.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  data: Entry[] = []
  constructor(
    private router: Router,
    private dataService: DataService
  ) {
    if (!this.dataService.hasData()) {
      this.router.navigate([""])
    }

  }

  ngOnInit(): void {
    this.data = this.dataService.getData() ?? []
  }

}
