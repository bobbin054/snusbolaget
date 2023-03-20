import React, { ReactNode } from 'react';
import { IProductInCart } from '../../interfaces/IProductInCart';
import { IProduct } from '../../interfaces/IProduct';


export interface ICartContext {
  productsInCart: IProductInCart[];
  add: (productToAdd: IProduct, numToAdd: number) => void;
  totalQuantity: number;
  totalPrice: number;
  decreaseQuantity: (productToDecrease: IProductInCart) => void;
  increaseQuantity: (productToIncrease: IProductInCart) => void;
  remove: (productToRemove: IProductInCart) => void;
}

export const CartContext = React.createContext<ICartContext>({
    productsInCart: [],
    add: () => {},
    remove: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    totalQuantity: 0,
    totalPrice: 0,
});

export const CartProvider = ({ children }: { children?: ReactNode }) => {
    const [productsInCart, setProductsInCart] = React.useState<IProductInCart[]>([]);

    const totalPrice = productsInCart.reduce((acc, p) => acc + (p.price ?? 0) * p.quantity, 0);
    const totalQuantity = productsInCart.reduce((acc, p) => acc + p.quantity, 0);

    const add = (productToAdd: IProduct, numToAdd = 1) => {
        const alreadyAddedProduct = productsInCart.find((p) => p.name === productToAdd.name);
        if (alreadyAddedProduct) {
            alreadyAddedProduct.quantity += numToAdd;
            setProductsInCart([...productsInCart]);
        } else {
            productsInCart.push({ ...productToAdd, quantity: numToAdd });
            setProductsInCart([...productsInCart]);
        }
    };

    const decreaseQuantity = (product: IProductInCart) => {
        product.quantity--;
        if (product.quantity <= 0) {
            remove(product);
        } else {
            setProductsInCart([...productsInCart]);
        }
    };

    const remove = (productToRemove: IProductInCart) => {
        setProductsInCart(productsInCart.filter((p) => p.id !== productToRemove.id));
    };

    const increaseQuantity = (product: IProductInCart) => {
        product.quantity++;
        setProductsInCart([...productsInCart]);
    };

    return (
        <CartContext.Provider
            value={{
                productsInCart,
                add,
                remove,
                totalQuantity,
                totalPrice,
                decreaseQuantity,
                increaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
