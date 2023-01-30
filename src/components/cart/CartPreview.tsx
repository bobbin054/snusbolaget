import { IProductInCart } from "../../interfaces/IProductInCart";
import { countTotalQuantity } from "../../services/CartService";
import "./CartPreview.scss";

export function CartPreview({ productsInCart }: { productsInCart: IProductInCart[] }) {
  console.log("CartPreview");
  return (
    <div className="cart-preview">
      <div className="ml-bs mr-bs">
        <i className="fa fa-shopping-cart mr-bs"></i>
        {countTotalQuantity(productsInCart)}
      </div>
      <div className="vl"></div>
      <div className="cart-preview__right mr-bs">0 kr{/* {{ cartService.getTotalPrice() }} kr */}</div>
      <span className="fa fa-chevron-circle-right"></span>
    </div>
  );
}
