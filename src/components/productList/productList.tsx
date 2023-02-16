import { CartContext } from "../cartProvider/cartProvider";
import React from "react";
import "./productList.scss";
import { ProductsContext } from "../productsProvider/productsProvider";
import { Link } from "react-router-dom";
import Select, { IOptions } from "../select/select";
import { IProduct } from "../../interfaces/iProduct";
import { range } from "lodash";

export function ProductList() {
  const { products } = React.useContext(ProductsContext);
  return (
    <>
      <div className="product-container">
        {products?.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </>
  );
}
const QUANTITIES: IOptions[] = [
  { id: 1, label: "1 can", enabled: true, data: 1 },
  { id: 2, label: "10 cans", enabled: true, data: 10 },
  { id: 3, label: "30 cans", enabled: true, data: 30 },
];

const Product = ({ product }: { product: IProduct }) => {
  const quantities: IOptions[] = QUANTITIES.map((q: IOptions, i) => {
    if (q.data === 1) {
      return { ...q, label: `${q.label} - ${product.price} kr` };
    }
    return { ...q, label: `${q.label} (${product.price} kr/st) - ${product.price * q.data} kr` };
  });
  const { add } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(quantities[1]);
  return (
    <div key={product.id} className="product-container__item">
      <Link to={`/products/${product.name}`}>
        <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
      </Link>
      <div>{product.name}</div>
      <div>
        <Select options={quantities} selected={quantity} setSelected={setQuantity}></Select>
        <button
          type="button"
          className="fa fa-cart-plus product-container__button"
          onClick={() => {
            return add(product, quantity.data);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
