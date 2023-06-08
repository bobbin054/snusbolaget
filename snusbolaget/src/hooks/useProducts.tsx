import useSWR from "swr";
import { supabase, supabaseUrl } from "../supabaseClient/supabaseClient";
import { Database } from "../interfaces/IDatabase";
async function fetcher() {
  const productsResponse = await supabase.from("Products").select("*");
  return productsResponse.data;
}

export const useProducts = () => {
  const { data: products, mutate, isLoading } = useSWR(supabaseUrl, fetcher);
  const getProduct = (name: string) => {
    return products?.find((product) => product.name === name);
  };
  const updateProduct = async (product) => {
    console.log("Update product: ", product);
    await supabase
      .from("Products")
      .update({ ...product })
      .eq("id", product.id);
    return product;
  };
  return {
    products,
    isLoading,
    getProduct,
    updateProduct,
    mutate,
  };
};
