import { IProduct } from "../../interfaces/IProduct";
import { CartService } from "../../services/CartService";

export function ProductList({ PRODUCTS }: { PRODUCTS: IProduct[] }) {
  return (
    <>
      <div className="product-container">
        {PRODUCTS?.map((product) => {
          return (
            <div className="product-container__item">
              <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
              <div>{product.name}</div>
              <div>
                1 can - {product.price} kr
                <button
                  type="button"
                  className="fa fa-cart-plus product-container__button"
                  //  onClick={  CartService.addToCart(product) }
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
