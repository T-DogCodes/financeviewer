import { Injectable } from '@angular/core';
import {Entry} from "../models/entry.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: Entry[] | null = null;

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
