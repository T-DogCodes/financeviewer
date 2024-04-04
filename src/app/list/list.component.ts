import {Component, OnInit} from '@angular/core';
import {Entry} from "../models/entry.model";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {FilterValues} from "../shared/filter/models/filter-values.model";
import {filter} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: Entry[] = []
  filterValues: FilterValues = {
    dateFrom: null,
    dateTo: null,
    minPrice: null,
    maxPrice: null,
    stores: []
  }


  constructor(
    private router: Router,
    private dataService: DataService,
  ) {
    if (!this.dataService.hasData()) {
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {
    this.data = this.dataService.getData() ?? []
  }

  onFilterValuesChanged(filterValues: FilterValues) {
    this.filterValues = filterValues
  }

  protected readonly filter = filter;
}
