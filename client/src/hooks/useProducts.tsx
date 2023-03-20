import React from "react";
import { IProduct } from "../interfaces/IProduct";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./products";

type STATUS = "idle" | "loading" | "error" | "success";
export const PRODUCTS_ENDPOINT = "https://ivfguobvnkblumlcqcod.supabase.co";
const supabaseUrl = 'https://ivfguobvnkblumlcqcod.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2Zmd1b2J2bmtibHVtbGNxY29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzU1NjksImV4cCI6MTk5Mzk1MTU2OX0.I0QRDquizwDLkbN6kY_Vp-Ro-p0-Xg17Yh18KzpOSu4";
const supabase = createClient<Database>(supabaseUrl, supabaseKey)


async function fetcher() {
  const { data } = await supabase.from("Products").select("*");
  console.log("data: ", data);
  return data;
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
