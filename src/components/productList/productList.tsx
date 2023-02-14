import { IProduct } from "../../interfaces/IProduct";
import { CartContext } from "../cartProvider/CartProvider";
import React from "react";
import "./productList.scss";

export function ProductList({ products }: { products: IProduct[] }) {
  const { handleAddToCart } = React.useContext(CartContext);
  return (
    <>
      <div className="product-container">
        {products?.map((product) => {
          return (
            <div key={product.id} className="product-container__item">
              <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
              <div>{product.name}</div>
              <div>
                1 can - {product.price} kr
                <button
                  type="button"
                  className="fa fa-cart-plus product-container__button"
                  onClick={() => {
                    return handleAddToCart(product);
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
