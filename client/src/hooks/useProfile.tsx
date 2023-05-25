import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Database } from "../interfaces/IDatabase";
import { supabase } from "../supabaseClient/supabaseClient";

export default function useProfile({ session }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<PostgrestSingleResponse<Database['public']['Tables']['profiles']>>({} as PostgrestSingleResponse<Database['public']['Tables']['profiles']>);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      console.log("profiles: ", await supabase.from("profiles").select("id"));
      setProfile(await supabase.from("profiles").select("*").eq("id", session?.user?.id).single());
      setLoading(false);
    }
    getProfile();
  }, [session]);
  return { loading, profile, setProfile };
}
