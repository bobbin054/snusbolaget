import React from "react";
import { PRODUCTS } from "../../assets/Products";
import { IProduct } from "../../interfaces/iProduct";

export interface IProductsContext {
  products: IProduct[];
  getProduct: (name: string) => IProduct | undefined;
}
export const ProductsContext = React.createContext<IProductsContext>({ products: [], getProduct: () => undefined });

export const ProductsProvider = ({ children }: { children: any }) => {
  const [products, setProducts] = React.useState<IProduct[]>(PRODUCTS);
  const getProduct = (name: string) => {
    return products.find((product) => product.name === name);
  };
  return <ProductsContext.Provider value={{ products, getProduct }}>{children}</ProductsContext.Provider>;
};
