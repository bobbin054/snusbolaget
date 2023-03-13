import React from "react";
import { IProduct } from "../interfaces/IProduct";
import axios from "axios";
import useSWR, { mutate } from "swr";

type STATUS = "idle" | "loading" | "error" | "success";
export const PRODUCTS_ENDPOINT = "https://localhost:7083/Products";
async function fetcher(url: string): Promise<IProduct[]> {
  try {
    const response = await axios.get<IProduct[]>(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const useProducts = () => {
  console.log("useProducts");
  const { data: products, mutate, isLoading } = useSWR<IProduct[]>(PRODUCTS_ENDPOINT, fetcher);
  const getProduct = (name: string) => {
    return products?.find((product) => product.name === name);
  };
  return {
    products,
    isLoading,
    getProduct,
    mutate,
  };
};
