import styled from "styled-components";
import { QUANTITIES } from "../data/quantities";
import Select, { IOptions } from "./select";
import React from "react";
import { CartContext } from "./cartProvider";
import { Link, Outlet } from "react-router-dom";
import { IProduct } from "../interfaces/IProduct";

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
const StyledButton = styled.button`
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
`;

const StyledSelect = styled(Select)`
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: 600;
  font-size: 14px;
`;

export const Product = ({ product }: { product: IProduct }) => {
  const quantities: IOptions[] = QUANTITIES.map((q: IOptions) => {
    if (q.data === 1) {
      return { ...q, label: `${q.label} - ${product.price} kr` };
    }
    return { ...q, label: `${q.label} (${product.price} kr/st) - ${(product.price ?? 0) * q.data} kr` };
  });
  const { add } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(quantities[1]);
  return (
    <ProductContainer key={product.id}>
      <Sticker>Extra expensive</Sticker>
      <Link to={`/products/${product.name}`}>
        <img src={product.imageUrl ?? ""} className="h-100" title={product.name ?? ""} alt="product image" />
      </Link>
      <div>{product.name}</div>
      <div>
        <StyledSelect options={quantities} selected={quantity} setSelected={setQuantity}></StyledSelect>
        <StyledButton
          type="button"
          onClick={() => {
            return add(product, quantity.data);
          }}
        >
          <i className="fa fa-cart-plus"></i> Add to cart
        </StyledButton>
      </div>
      <Outlet />
    </ProductContainer>
  );
};
