import useSWR from "swr";
import { supabase, supabaseUrl } from "../supabaseClient/supabaseClient";
import { Database } from "../interfaces/IDatabase";
async function fetcher() {
  const productsResponse = await supabase.from("Products").select("*");
  return productsResponse.data;
}

export const useProductsAPI = () => {
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
  const createProduct = async (product) => {
    console.log("Create product: ", product);
    const { data, error } = await supabase.from("Products").insert([product]);
    if (error) {
      console.log("Error: ", error);
      return;
    }
    return data;
  };
  const deleteProduct = async (product) => {
    console.log("Delete product: ", product);
    const { data, error } = await supabase.from("Products").delete().eq("id", product.id);
    if (error) {
      console.log("Error: ", error);
      return;
    }
    return data;
  };
  return {
    products,
    isLoading,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct,
    mutate,
  };
};
