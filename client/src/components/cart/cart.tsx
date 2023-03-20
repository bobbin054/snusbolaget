import React from 'react';
import styles from './cart.module.scss';
import { CartContext } from '../cartProvider/cartProvider';
import { Link } from 'react-router-dom';

export function Cart() {
    const { productsInCart, totalPrice, decreaseQuantity, increaseQuantity, remove } = React.useContext(CartContext);
    if (productsInCart.length === 0) {
        return (
            <div className={styles.cart__empty}>
        Cart is empty <Link to="/products">Take me to the snus</Link>
            </div>
        );
    }
    return (
        <>
            <table className={styles.table}>
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
                            <tr key={productInCart.id} className="table-row align-baseline">
                                <td>
                                    <img className={styles.smallImg} src={productInCart.imageUrl ?? ''} alt={productInCart.imageUrl ?? ''} />
                                </td>
                                <td>{productInCart.name}</td>
                                <td>
                                    <button
                                        type="button"
                                        className={styles.quantity}
                                        onClick={() => {
                                            decreaseQuantity(productInCart);
                                        }}
                                    >
                    -
                                    </button>
                                    {productInCart.quantity}
                                    <button
                                        type="button"
                                        className={styles.quantity}
                                        onClick={() => {
                                            increaseQuantity(productInCart);
                                        }}
                                    >
                    +
                                    </button>
                                </td>
                                <td>{productInCart.price}</td>
                                <td>{productInCart.price ?? 0 * productInCart.quantity} </td>
                                <td>
                                    <button
                                        type="button"
                                        className={`${styles.remove} fa fa-trash-o trash-can-xmark`}
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
            </table>
            <div className="alert alert-success">Total: {totalPrice}</div>
        </>
    );
}
