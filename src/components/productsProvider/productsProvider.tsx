import React from "react";
import { PRODUCTS } from "../../assets/Products";
import { IProduct } from "../../interfaces/IProduct";

export interface IProductsContext {
  products: IProduct[];
}
export const ProductsContext = React.createContext<IProduct[]>([]);

export const ProductsProvider = ({ children }: { children: any }) => {
  const [products, setProducts] = React.useState<IProduct[]>(PRODUCTS);
  return <ProductsContext.Provider value={ products }>{children}</ProductsContext.Provider>;
};
