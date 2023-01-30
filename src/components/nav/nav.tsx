import { useState } from "react";
import { PRODUCTS } from "../../assets/Products";
import { CartPreview } from "../cart/CartPreview";
import { ProductList } from "../productList/ProductList";

export function Nav() {
  const [productList, setProductList] = useState<JSX.Element | null>();
  return (
    <>
      <nav className="nav">
        <div className="nav__left">
          <button className="nav__item mr-2" type="button">
            snushandeln.se
          </button>
          <button
            className="nav__item"
            type="button"
            onClick={() => {
              setProductList(<ProductList products={PRODUCTS} />);
            }}
          >
            Products
          </button>
        </div>
        <div className="nav__right">
          {/* Check if this div is nessessary */}
          <div className="nav__item">
            <CartPreview />
          </div>
        </div>
      </nav>
      {productList}
    </>
  );
}
