import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient/supabaseClient";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] =
    useState<
      PostgrestSingleResponse<{
        [x: string]: string | number | Date | boolean | null;
      }>
    >();

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      setProfile(await supabase.from("profiles").select("*").eq("id", session.user.id).single());
      setLoading(false);
    }
    getProfile();
  }, [session]);

  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,

      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <pre> profile: {JSON.stringify(profile, null, 2)}</pre>
      <pre> session: {JSON.stringify(session, null, 2)}</pre>
      <div>
        <button type="button" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </>
  );
}
