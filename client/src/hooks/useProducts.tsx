import React from "react";
import { IProduct } from "../interfaces/IProduct";
import axios from "axios";
import useSWR from "swr";

type STATUS = "idle" | "loading" | "error" | "success";
const ENDPOINT = "https://localhost:7083/Products";
async function fetcher(url: string): Promise<IProduct[]> {
  const response = await axios.get<IProduct[]>(url);
  return response.data;
}
export const useProducts = () => {
  const { data: products, error } = useSWR<IProduct[]>(ENDPOINT, fetcher);

  const getProduct = (name: string) => {
    return products?.find((product) => product.name === name);
  };
  return {
    products,
    getProduct,
    error,
  };
};