import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient/supabaseClient";
export const useSession = () => {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session: ", session);
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("session: ", session);
    });
  }, []);

  return { session, setSession };
};
