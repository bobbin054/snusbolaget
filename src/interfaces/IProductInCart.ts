import { IProduct } from "./iProduct";

export interface IProductInCart extends IProduct {
  quantity: number;
}
