import React from "react";
import styles from "./cart.module.scss";
import * as Popover from "@radix-ui/react-popover";
import { CartContext } from "../cartProvider/cartProvider";

export function Cart() {
  const { productsInCart,totalPrice,decreaseQuantity,increaseQuantity,remove } = React.useContext(CartContext);
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
          {productsInCart.map((productInCart) => {
            return (
              <tr className="table-row align-baseline">
                <td>{productInCart.name}</td>
                <td>
                  <button
                    type="button"
                    className="cart__quantity"
                    onClick={() => {
                       decreaseQuantity(productInCart)
                    }}
                  >
                    -
                  </button>
                  {productInCart.quantity}
                  <button
                    type="button"
                    className="cart__quantity"
                    onClick={() => {
                      increaseQuantity(productInCart)
                    }}
                  >
                    +
                  </button>
                </td>
                <td>{productInCart.price}</td>
                <td>{productInCart.price * productInCart.quantity} </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger fa fa-trash-o trash-can-xmark"
                    title="Remove from cart"
                    onClick={() => {
                       remove(productInCart)
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="alert alert-danger">Your cart is empty</div>
      <div className="alert alert-success">Total: {totalPrice}</div>
    </>
  );
}
