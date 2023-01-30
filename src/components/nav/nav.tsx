import { useState } from "react";
import { PRODUCTS } from "../../assets/Products";
import { IProduct } from "../../interfaces/IProduct";
import { IProductInCart } from "../../interfaces/IProductInCart";
import { CartPreview } from "../cart/CartPreview";
import { ProductList } from "../productList/ProductList";

export function Nav() {
  const [productList, setProductList] = useState<JSX.Element | null>();
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);
  function handleAddToCart(productToAdd: IProduct) {
    const alreadyAddedProduct = productsInCart.find((p) => p.name === productToAdd.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
      setProductsInCart([...productsInCart]);
    } else {
      productsInCart.push({ ...productToAdd, quantity: 1 });
      setProductsInCart([...productsInCart]);
    }
  }

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
              setProductList(<ProductList products={PRODUCTS} addToCart={handleAddToCart} />);
            }}
          >
            Products
          </button>
        </div>
        <div className="nav__right">
          {/* Check if this div is nessessary */}
          <div className="nav__item">
            <CartPreview productsInCart={productsInCart} />
          </div>
        </div>
      </nav>
      {productList}
    </>
  );
}
