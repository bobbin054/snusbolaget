import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Profile } from "../interfaces/IDatabase";
import { supabase } from "../supabaseClient/supabaseClient";

export default function useProfile({ session }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<PostgrestSingleResponse<Profile>>({} as PostgrestSingleResponse<Profile>);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      setProfile(await supabase.from("profiles").select("*").eq("id", session.user.id).single());
      setLoading(false);
    }
    getProfile();
  }, [session]);
  return { loading, profile, setProfile };
}
