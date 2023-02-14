import React from "react";
import styles from "./cart.module.scss";

export function Cart() {
  return <div className={styles.redBox}>hej</div>;
  // return (
  //   <div className="cart card">
  //     <div className="card-header">Cart</div>
  //     <div className="card-body">
  //       <table className="table table-hover">
  //         <thead>
  //           <tr>
  //             <th>Product</th>
  //             <th>Quantity</th>
  //             <th>á price</th>
  //             <th>Sum</th>
  //             <th />
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr className="table-row align-baseline">
  //             <td>
  //               {"{"}
  //               {"{"} productInCart.productName {"}"}
  //               {"}"}
  //             </td>
  //             <td>
  //               <button
  //                 type="button"
  //                 className="cart__quantity"
  //                 onClick={() => {
  //                   // decreaseQuantity(productInCart)
  //                 }}
  //               >
  //                 -
  //               </button>
  //               {/* productInCart.quantity  */}
  //               <button
  //                 type="button"
  //                 className="cart__quantity"
  //                 onClick={() => {
  //                   // increaseQuantity(productInCart)
  //                 }}
  //               >
  //                 +
  //               </button>
  //             </td>
  //             <td>
  //               {"{"}
  //               {"{"} productInCart.price {"}"}
  //               {"}"}
  //             </td>
  //             <td>
  //               {"{"}
  //               {"{"} productInCart.price * productInCart.quantity {"}"}
  //               {"}"}
  //             </td>
  //             <td>
  //               <button
  //                 type="button"
  //                 className="btn btn-danger fa fa-trash-o trash-can-xmark"
  //                 title="Remove from cart"
  //                 onClick={() => {
  //                   // removeFromCart(productInCart)
  //                 }}
  //               />
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       <div className="alert alert-danger">Your cart is empty</div>
  //       <div className="alert alert-success">
  //         Total: {"{"}
  //         {"{"} getTotalPrice() {"}"}
  //         {"}"}
  //       </div>
  //     </div>
  //   </div>
  // );
}
