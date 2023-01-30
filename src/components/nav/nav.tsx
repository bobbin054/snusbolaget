import { useState } from "react";
import { PRODUCTS } from "../../assets/Products";
import { IProduct } from "../../interfaces/IProduct";
import { IProductInCart } from "../../interfaces/IProductInCart";
import { CartPreview } from "../cart/CartPreview";
import { ProductList } from "../productList/ProductList";
import "./nav.scss";

export function Nav() {
  const [productList, setProductList] = useState<JSX.Element | null>();
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);
  const handleAddToCart = (productToAdd: IProduct): void => {
    const alreadyAddedProduct = productsInCart.find((p) => p.name === productToAdd.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
      setProductsInCart([...productsInCart]);
    } else {
      productsInCart.push({ ...productToAdd, quantity: 1 });
      setProductsInCart([...productsInCart]);
    }
  };

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
        <div className="nav__item">
          <CartPreview productsInCart={productsInCart} />
        </div>
      </nav>
      {productList}
    </>
  );
}
