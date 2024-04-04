import {Discount} from "./discount.model";

export interface Article {
  name: string,
  amount: number,
  price: number,
  discounts: Discount[]
}
