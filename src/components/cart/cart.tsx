import React from "react";
import styles from "./cart.module.scss";
import * as Popover from "@radix-ui/react-popover";

export function Cart() {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>á price</th>
            <th>Sum</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr className="table-row align-baseline">
            <td>productName</td>
            <td>
              <button
                type="button"
                className="cart__quantity"
                onClick={() => {
                  // decreaseQuantity(productInCart)
                }}
              >
                -
              </button>
              20
              <button
                type="button"
                className="cart__quantity"
                onClick={() => {
                  // increaseQuantity(productInCart)
                }}
              >
                +
              </button>
            </td>
            <td>price</td>
            <td>price * quantity</td>
            <td>
              <button
                type="button"
                className="btn btn-danger fa fa-trash-o trash-can-xmark"
                title="Remove from cart"
                onClick={() => {
                  // removeFromCart(productInCart)
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="alert alert-danger">Your cart is empty</div>
      <div className="alert alert-success">Total: getTotalPrice()</div>
    </>
  );
}
