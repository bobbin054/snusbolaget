import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient/supabaseClient";
export const useSessionAPI = () => {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // console.log("session: ", session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      // console.log("session: ", session);
    });
  }, []);

  return { session, setSession };
};
