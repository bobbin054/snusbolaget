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
  position: relative;
  box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  align-items: center;
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
  font-size: 1rem;
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
      <h2 className="text-lg underline">{product.name}</h2>
      <div className="self-start flex flex-row  text-base min-w-full">
        <Select
          options={quantities}
          selected={quantity}
          setSelected={setQuantity}
          className="w-full border-4 rounded-r-none border-gray-500 border-r-0 rounded"
        ></Select>
        <StyledButton
          type="button"
          onClick={() => {
            return add(product, quantity.data);
          }}
          className="w-full border-4 rounded-l-none border-red rounded"
        >
          <i className="fa fa-cart-plus"></i> Add to cart
        </StyledButton>
      </div>
      <Outlet />
    </ProductContainer>
  );
};
