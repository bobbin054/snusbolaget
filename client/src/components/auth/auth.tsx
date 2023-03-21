import { AuthResponse } from "@supabase/supabase-js";
import { useState } from "react";
import { supabase } from "../../supabaseClient/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authResponse, setAuthResponse] = useState<AuthResponse>();
  const [signUpResponse, setSignUpResponse] = useState<AuthResponse>();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setAuthResponse(await supabase.auth.signInWithPassword({ email, password: "123456" }));
    setLoading(false);
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSignUpResponse(await supabase.auth.signUp({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your password"
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="on"
          />
        </div>
        <div>
          <button disabled={loading}>{loading ? <span>Loading</span> : <span>Sign up</span>}</button>
          {signUpResponse && <pre>{JSON.stringify(signUpResponse,null,2)}</pre>}
        </div>
      </form>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your password"
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="on"
          />
        </div>
        <div>
          <button disabled={loading}>{loading ? <span>Loading</span> : <span>Login</span>}</button>
        </div>
      </form>
      {authResponse && <pre>{JSON.stringify(authResponse,null,2)}</pre>}
    </>
  );
}
