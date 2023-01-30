import { useReducer, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IProductInCart } from "../../interfaces/IProductInCart";

export function ProductList({ products, addToCart }: { products: IProduct[]; addToCart: (product: IProduct) => void }) {
  // state for products in cart
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);

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
                    return addToCart(product);
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
