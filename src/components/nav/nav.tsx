import React from "react";
import { CartPreview } from "../cartPreview/CartPreview";
import { ProductList } from "../productList/ProductList";
import "./nav.scss";

export function Nav() {
  const [renderProductList, setRenderProductList] = React.useState<boolean>(false);
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
        <div className="nav__item">
          <CartPreview />
        </div>
      </nav>
      {renderProductList && <ProductList />}
    </>
  );
}
