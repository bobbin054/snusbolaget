import { PRODUCTS } from "../../assets/products";
import { IProduct } from "../../interfaces/IProduct";

export function ProductList() {
    return (
      <>
        <div className="product-container">
          {PRODUCTS.map((product) => {
            return (
              <div className="product-container__item">
                <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
                <div>{product.name}</div>
                <div>
                  1 can - {product.price} kr
                  <button
                    type="button"
                    className="fa fa-cart-plus product-container__button"
                    // (click)="this.cartService.addToCart(product)"
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

