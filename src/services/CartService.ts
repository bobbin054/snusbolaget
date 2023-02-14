import { ReplaySubject } from "rxjs";
import { IProduct } from "../interfaces/iProduct";
import { IProductInCart } from "../interfaces/iProductInCart";

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
 




  public removeFromCart(product: IProductInCart): void {
    this.productsInCart = this.productsInCart.filter((p) => p !== product);
  }
}
