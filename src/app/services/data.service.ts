import { Injectable } from '@angular/core';
import {Entry} from "../models/entry.model";

const TEST_DATA = [
  {
    "date": new Date("2024-01-02"),
    "storeName": "Der Mann",
    "articles": [
      {
        "name": "Briochekipferl",
        "amount": 2,
        "price": 1.35
      }
    ]
  },
  {
    "date": new Date("2024-01-02"),
    "storeName": "Action",
    "articles": [
      {
        "name": "Thermometer",
        "amount": 1,
        "price": 3.99
      }
    ]
  },
  {
    "date": new Date("2024-01-02"),
    "storeName": "Villa Vida Café",
    "articles": [
      {
        "name": "Pommes",
        "amount": 1,
        "price": 4.50
      },
      {
        "name": "Fritz Cola",
        "amount": 1,
        "price": 3.50
      },
      {
        "name": "Tip",
        "price": 0.50,
        "amount": 1
      }
    ]
  },
  {
    "date": new Date("2024-01-03"),
    "storeName": "Der Mann",
    "articles": [
      {
        "name": "Briochekipferl",
        "amount": 2,
        "price": 1.35
      }
    ]
  },
  {
    "date": new Date("2024-01-04"),
    "storeName": "Raiffeisenbank",
    "articles": [
      {
        "name": "Depotservice-Entgelt",
        "price": 32.16,
        amount: 1
      }
    ]
  },

];


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: Entry[] | null = null;
  // private data: Entry[] | null = TEST_DATA;

  public hasData(): boolean {
    return this.data != null
  }

  public setData(data: Entry[]) : void {
    this.data = data;
  }

  public getData(): Entry[] {
    return this.data!!;
  }
}
