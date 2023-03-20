import useSWR from "swr";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../interfaces/IDatabase";

const supabaseUrl = "https://ivfguobvnkblumlcqcod.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2Zmd1b2J2bmtibHVtbGNxY29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzU1NjksImV4cCI6MTk5Mzk1MTU2OX0.I0QRDquizwDLkbN6kY_Vp-Ro-p0-Xg17Yh18KzpOSu4";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

async function fetcher() {
  const { data } = await supabase.from("Products").select("*");
  console.log("data: ", data);
  return  data;
}

export const useProducts = () => {
  console.log("useProducts");

  const { data: products, mutate, isLoading } = useSWR(supabaseUrl, fetcher);
  const getProduct = (name: string) => {
    return products?.find((product) => product.name === name);
  };
  const updateProduct = async (product) => {
    const updateProduct: {
      contentWeight?: string | null;
      contentWeightUnit?: string | null;
      created_at?: string | null;
      description?: string | null;
      id?: string;
      imageUrl?: string | null;
      name?: string | null;
      nicotineAmount?: string | null;
      nicotineLevel?: string | null;
      price?: number | null;
      producer?: string | null;
      starRating?: number | null;
      taste?: string | null;
      type?: string | null;
    } = {
      contentWeight: product.contentWeight,
      contentWeightUnit: product.contentWeightUnit,
      description: product.description,
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      nicotineAmount: product.nicotineAmount,
      nicotineLevel: product.nicotineLevel,
      price: product.price,
      producer: product.producer,
      starRating: product.starRating,
      taste: product.taste,
      type: product.type,
    };
    
   const response = await supabase.from("Products").update(updateProduct).eq("id", product.id);
   console.log("response: ", response);
   return response.data;
  };
  return {
    products,
    isLoading,
    getProduct,
    updateProduct,
    mutate,
  };
};
