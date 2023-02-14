import React from "react";
import { CartContext, ICartContext } from "../cartProvider/cartProvider";
import "./CartPreview.scss";

export function CartPreview() {
  const { totalPrice, totalQuantity } = React.useContext<ICartContext>(CartContext);

  return (
    <div className="cart-preview">
      <div className="ml-bs mr-bs">
        <i className="fa fa-shopping-cart mr-bs"></i>
        {totalQuantity}
      </div>
      <div className="vl"></div>
      <div className="cart-preview__right mr-bs">{totalPrice} kr</div>
      <span className="fa fa-chevron-circle-right"></span>
    </div>
  );
}
