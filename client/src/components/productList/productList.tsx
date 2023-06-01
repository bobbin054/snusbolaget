import { CartContext } from "../cartProvider/cartProvider";
import React from "react";
import { Link } from "react-router-dom";
import Select, { IOptions } from "../select/select";
import { IProduct } from "../../interfaces/IProduct";
import styles from "./productList.module.scss";
import { useProducts } from "../../hooks/useProducts";
import styled from "styled-components";

export function ProductList() {
  const { products } = useProducts();
  return (
    <>
      {!products && <div>Loading ...</div>}
      <div className={`${styles.row} ${styles.gap}`}>
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

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: relative;
  box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.2);
`;

const Sticker = styled.div`
    position: absolute;
    top: -4px;
    left: -4px;
    background-color: red;
    color: white;
    padding: 0.25rem;
    border-radius: 0 0 1rem 0;
    font-size: 0.5rem;
    font-weight: bold;  
`;



const Product = ({ product }: { product: IProduct }) => {
  const quantities: IOptions[] = QUANTITIES.map((q: IOptions) => {
    if (q.data === 1) {
      return { ...q, label: `${q.label} - ${product.price} kr` };
    }
    return { ...q, label: `${q.label} (${product.price} kr/st) - ${product.price ?? 0 * q.data} kr` };
  });
  const { add } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(quantities[1]);
  return (
    <ProductContainer key={product.id}>
        <Sticker>Extra expensive</Sticker>
      <Link to={`/products/${product.name}`}>
        <img src={product.imageUrl ?? ""} title={product.name ?? ""} className={styles.img} alt="product image" />
      </Link>
      <div>{product.name}</div>
      <div className={`${styles.row}`}>
        <Select className={styles.select} options={quantities} selected={quantity} setSelected={setQuantity}></Select>
        <button
          type="button"
          className={`${styles.btn}`}
          onClick={() => {
            return add(product, quantity.data);
          }}
        >
          <i className="fa fa-cart-plus"></i> Add to cart
        </button>
      </div>
    </ProductContainer>
  );
};
