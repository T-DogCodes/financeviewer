import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterValues} from "./models/filter-values.model";
import {Entry} from "../../models/entry.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() data: Entry[] = []
  @Output() filterValues = new EventEmitter<FilterValues>();

  filterVisible = true;

  values = {
    dateFrom: null,
    dateTo: null,
    maxPrice: null,
    minPrice: null,
    stores: {} as {[key:string]:boolean}
  }


  constructor() { }

  ngOnInit(): void {
  }

  toggleFilterVisibility() {
    this.filterVisible = !this.filterVisible;
  }

  toggleStoreName(storeName: string) {
    if (this.values.stores[storeName] == undefined) {
      this.values.stores[storeName] = true;
    } else {
      this.values.stores[storeName] = !this.values.stores[storeName];
    }
  }

  resetFilter() {
    this.values = {
      dateFrom: null,
      dateTo: null,
      maxPrice: null,
      minPrice: null,
      stores: {} as {[key:string]:boolean}
    }
  }

  submitFilter() {
    this.filterValues.emit({
      dateFrom: this.values.dateFrom,
      dateTo: this.values.dateTo,
      minPrice: this.values.minPrice,
      maxPrice: this.values.maxPrice,
      stores: Object.entries(this.values.stores)
        .filter(([storeName, selected]) => selected)
        .map(([storeName, selected]) => storeName)
    })
  }
}
