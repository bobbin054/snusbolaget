import { useReducer, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IProductInCart } from "../../interfaces/IProductInCart";

export function ProductList({ products }: { products: IProduct[] }) {
  // state for products in cart
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);

  function handleOnClick(product: IProduct) {
    const alreadyAddedProduct = productsInCart.find((p) => p.name === product.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
      setProductsInCart([...productsInCart]);
    } else {
      setProductsInCart([
        ...productsInCart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <>
      <div className="product-container">
        {products?.map((product) => {
          return (
            <div className="product-container__item">
              <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
              <div>{product.name}</div>
              <div>
                1 can - {product.price} kr
                <button
                  type="button"
                  className="fa fa-cart-plus product-container__button"
                  onClick={() => {
                    handleOnClick(product);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
