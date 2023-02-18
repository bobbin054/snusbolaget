import React from "react";
import { PRODUCTS } from "../../assets/products";
import { IProduct } from "../../interfaces/IProduct";
import axios from "axios";

export interface IProductsContext {
  products: IProduct[];
  getProduct: (name: string) => IProduct | undefined;
}
export const ProductsContext = React.createContext<IProductsContext>({ products: [], getProduct: () => undefined });

export const ProductsProvider = ({ children }: { children: any }) => {
  axios({
    method: "get",
    url: "https://localhost:7083/Products",
  }).then((response) => {
    console.log(response);
  });

  const [products, setProducts] = React.useState<IProduct[]>(PRODUCTS);
  const getProduct = (name: string) => {
    return products.find((product) => product.name === name);
  };
  return <ProductsContext.Provider value={{ products, getProduct }}>{children}</ProductsContext.Provider>;
};