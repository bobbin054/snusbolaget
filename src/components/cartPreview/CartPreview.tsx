import React from "react";
import { countTotalQuantity, getTotalPrice } from "../../services/CartService";
import { CartContext, ICartContext } from "../cartProvider/CartProvider";
import "./CartPreview.scss";

export function CartPreview() {
  const { productsInCart } = React.useContext<ICartContext>(CartContext);

  return (
    <div className="cart-preview">
      <div className="ml-bs mr-bs">
        <i className="fa fa-shopping-cart mr-bs"></i>
        {countTotalQuantity(productsInCart)}
      </div>
      <div className="vl"></div>
      <div className="cart-preview__right mr-bs">{getTotalPrice(productsInCart)} kr</div>
      <span className="fa fa-chevron-circle-right"></span>
    </div>
  );
}
