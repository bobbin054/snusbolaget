import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Database } from "../interfaces/IDatabase";
import { supabase } from "../supabaseClient/supabaseClient";

export default function useProfileAPI({ session }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] =
    useState<PostgrestSingleResponse<Database["public"]["Tables"]["profiles"]["Row"]> | null>(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const userId = session?.user?.id;
      if (!userId) return;
      setProfile(await supabase.from("profiles").select("*").eq("id", userId).single());
      setLoading(false);
    }
    getProfile();
  }, [session]);
  return { loading, profile, setProfile };
}
