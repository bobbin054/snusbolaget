import React from "react";
import { CartContext, ICartContext } from "./cartProvider";
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

const VerticalLine = styled.div`
  border-left: 5px solid ${borderColor};
  margin: 0;
  padding: 0;
  height: 45px;
`;
export function CartPreview() {
  const { totalPrice, totalQuantity } = React.useContext<ICartContext>(CartContext);
  return (
    <CartPreviewWrapper>
      <div className="ml-4 mr-2">
        <i className="fa fa-shopping-cart mr-2"></i>
        {totalQuantity}
      </div>
      <VerticalLine />
      <div className="mr-2 flex justify-end">{totalPrice} kr</div>
      <span className="fa fa-chevron-circle-right"></span>
    </CartPreviewWrapper>
  );
}
