import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Database } from "../interfaces/IDatabase";
import { supabase } from "../supabaseClient/supabaseClient";

export default function useProfile({ session }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] =
    useState<PostgrestSingleResponse<Database["public"]["Tables"]["profiles"]["Row"]> | null>(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const a = await supabase.from("profiles").select("*").eq("id", session?.user?.id).single();
      console.log("error:", a.error);
      if (a === null || a.error) {
        return;
      }
      setProfile(a);
      setLoading(false);
    }
    getProfile();
  }, [session]);
  return { loading, profile, setProfile };
}
