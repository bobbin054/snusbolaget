import Auth from "./auth";
import Account from "./account";
import { useSessionAPI } from "../hooks/useSession";

function Login() {
  const { session } = useSessionAPI();
  return <>{!session ? <Auth /> : <Account key={session.user.id} session={session} />}</>;
}

export default Login;
