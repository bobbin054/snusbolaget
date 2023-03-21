import { useState, useEffect } from "react";
import Auth from "../auth/auth";
import Account from "../account/account";
import { supabase } from "../../supabaseClient/supabaseClient";
import { Session } from "@supabase/supabase-js";

function Login() {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session: ", session);
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{!session ? <Auth /> : <Account key={session.user.id} session={session} />}</>;
}

export default Login;
