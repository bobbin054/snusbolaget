import { IProduct } from "./IProduct";

export interface IProductInCart extends IProduct {
  quantity: number;
}
