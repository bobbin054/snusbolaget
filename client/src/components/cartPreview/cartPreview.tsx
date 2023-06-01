import React from "react";
import { CartContext, ICartContext } from "../cartProvider";
import "./CartPreview.scss";
import styled from "styled-components";

const borderColor = "#d41920";

const CartPreviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 5fr 1fr;
  color: white;
  background-color: #ed1c24;
  border-bottom: 5px solid ${borderColor};
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  align-items: center;
  align-content: center;
`;
const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const VerticalLine = styled.div`
  border-left: 5px solid ${borderColor};
  margin: 0;
  padding: 0;
  height: 50px;
`;
export function CartPreview() {
  const { totalPrice, totalQuantity } = React.useContext<ICartContext>(CartContext);
  return (
    <CartPreviewWrapper>
      <div className="ml-bs mr-bs">
        <i className="fa fa-shopping-cart mr-bs"></i>
        {totalQuantity}
      </div>
      <VerticalLine />
      <FlexEnd className="mr-bs">{totalPrice} kr</FlexEnd>
      <span className="fa fa-chevron-circle-right"></span>
    </CartPreviewWrapper>
  );
}
