import { CartContext } from "../cartProvider/cartProvider";
import React from "react";
import "./productList.scss";
import { ProductsContext } from "../productsProvider/productsProvider";
import { Link } from "react-router-dom";
import Select, { QUANTITIES } from "../select/select";
import { IProduct } from "../../interfaces/iProduct";

export function ProductList() {
  const { products } = React.useContext(ProductsContext);
  return (
    <>
      <div className="product-container">
        {products?.map((product) => {
          return <Product product={product}></Product>;
        })}
      </div>
    </>
  );
}

const Product = ({ product }: { product: IProduct }) => {
  const { add } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(QUANTITIES[1]);
  return (
    <div key={product.id} className="product-container__item">
      <Link to={`/products/${product.name}`}>
        <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
      </Link>
      <div>{product.name}</div>
      <div>
        <Select options={QUANTITIES} selected={quantity} setSelected={setQuantity}></Select>
        <button
          type="button"
          className="fa fa-cart-plus product-container__button"
          onClick={() => {
            return add(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
