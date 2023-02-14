import React from "react";
import { Cart } from "../cart/cart";
import { CartPreview } from "../cartPreview/cartPreview";
import { ProductList } from "../productList/productList";
import "./nav.scss";

export function Nav() {
  const [renderProductList, setRenderProductList] = React.useState<boolean>(false);
  const [renderCart, setRenderCart] = React.useState<boolean>(false);
  return (
    <>
      <nav className="nav">
        <div className="nav__left">
          <button className="nav__item mr-2" type="button">
            snushandeln.se
          </button>
          <button className="nav__item" type="button" onClick={() => setRenderProductList(true)}>
            Products
          </button>
        </div>
        <button className="nav__item" type="button" title="Cart preview" onClick={() => setRenderCart(true)}>
          <CartPreview />
        </button>
      </nav>
      {renderProductList && <ProductList />}
      {renderCart && <Cart />}
    </>
  );
}
