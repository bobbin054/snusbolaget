import React from "react";
import { CartContext } from "./cartProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";
const QuantityButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;
const CartTable = styled.table`
  width: 100%;
  border-style: none;
  th {
    text-align: left;
  }
  td {
    text-align: left;
    border: 1px solid #eaeaea;
    border-left: none;
    border-right: none;
  }
`;
const EmptyCartDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 2rem;
`;

export function Cart() {
  const { productsInCart, totalPrice, decreaseQuantity, increaseQuantity, remove } = React.useContext(CartContext);
  if (productsInCart.length === 0) {
    return (
      <EmptyCartDiv>
        Cart is empty <Link to="/products">Take me to the snus</Link>
      </EmptyCartDiv>
    );
  }
  return (
    <>
      <CartTable>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>á price</th>
            <th>Sum</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((productInCart) => {
            return (
              <tr key={productInCart.id}>
                <td>
                  <img
                    className={`w-12 h-auto object-cover mr-4`}
                    src={productInCart.imageUrl ?? ""}
                    alt={productInCart.imageUrl ?? ""}
                  />
                </td>
                <td>{productInCart.name}</td>
                <td>
                  <QuantityButton
                    type="button"
                    onClick={() => {
                      decreaseQuantity(productInCart);
                    }}
                  >
                    -
                  </QuantityButton>
                  {productInCart.quantity}
                  <QuantityButton
                    type="button"
                    onClick={() => {
                      increaseQuantity(productInCart);
                    }}
                  >
                    +
                  </QuantityButton>
                </td>
                <td>{productInCart.price}</td>
                <td>{productInCart.price ?? 0 * productInCart.quantity} </td>
                <td>
                  <button
                    type="button"
                    className={`fa fa-trash-o trash-can-xmark text-red-500`}
                    title="Remove from cart"
                    onClick={() => {
                      remove(productInCart);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </CartTable>
      <div className="alert alert-success">Total: {totalPrice}</div>
    </>
  );
}
