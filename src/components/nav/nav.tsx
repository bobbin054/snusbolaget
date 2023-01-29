import { useState } from "react";
import { CartService } from "../../services/CartService";
import { CartPreview } from "../cart/CartPreview";
import { ProductList } from "../productList/ProductList";

const cartService = new CartService();

export function Nav() {
  cartService.productsInCart$.subscribe((products) => {
    console.log(products);
  });
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
              setProductList(<ProductList />);
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
