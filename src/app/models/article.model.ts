import {Discount} from "./discount.model";

export interface Article {
  name: string,
  amount: number,
  price: number,
  discount?: Discount
}
