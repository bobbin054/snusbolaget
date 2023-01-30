import { ReplaySubject } from "rxjs";
import { IProduct } from "../interfaces/IProduct";
import { IProductInCart } from "../interfaces/IProductInCart";

export class CartService {
  public productsInCart$ = new ReplaySubject<IProductInCart[]>();
  private _productsInCart: IProductInCart[] = [];
  private get productsInCart(): IProductInCart[] {
    return this._productsInCart;
  }
  private set productsInCart(value: IProductInCart[]) {
    this._productsInCart = value;
    this.productsInCart$.next(this._productsInCart);
    console.log("Shop service products in cart: ", this._productsInCart);
  }

  constructor() {}

  //https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
  public addToCart(product: IProduct): void {
    const alreadyAddedProduct = this.productsInCart.find((p) => p.name === product.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
    } else {
      this.productsInCart = [
        ...this.productsInCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }
  }

  

  public increaseQuantity(product: IProductInCart): void {
    product.quantity++;
  }

  public decreaseQuantity(product: IProductInCart): void {
    product.quantity--;
    this.removeEmptyProducts();
  }

  private removeEmptyProducts(): void {
    this.productsInCart = this.productsInCart.filter((p) => p.quantity > 0);
    console.log("Shop service products in cart: ", this.productsInCart);
  }

  public removeFromCart(product: IProductInCart): void {
    this.productsInCart = this.productsInCart.filter((p) => p !== product);
  }
}
export function getTotalPrice(productsInCart: IProductInCart[]): number {
  return productsInCart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
}
export function countTotalQuantity(productsInCart: IProductInCart[]): number {
  return productsInCart.reduce((prev, curr) => prev + curr.quantity, 0);
}
