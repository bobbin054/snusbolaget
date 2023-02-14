import React from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IProductInCart } from "../../interfaces/IProductInCart";

export interface ICartContext {
  productsInCart: IProductInCart[];
  handleAddToCart: (productToAdd: IProduct) => void;
}

export const CartContext = React.createContext<ICartContext>({ productsInCart: [], handleAddToCart: () => {} });
export const CartProvider = ({ children }: { children: any }) => {
  const [productsInCart, setProductsInCart] = React.useState<IProductInCart[]>([]);
  const handleAddToCart = (productToAdd: IProduct) => {
    const alreadyAddedProduct = productsInCart.find((p) => p.name === productToAdd.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity++;
      setProductsInCart([...productsInCart]);
    } else {
      productsInCart.push({ ...productToAdd, quantity: 1 });
      setProductsInCart([...productsInCart]);
    }
  };
  return <CartContext.Provider value={{ productsInCart, handleAddToCart }}>{children}</CartContext.Provider>;
};
