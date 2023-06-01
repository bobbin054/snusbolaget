import Auth from "./auth";
import Account from "./account";
import { useSession } from "../hooks/useSession";

function Login() {
  const { session } = useSession();
  return <>{!session ? <Auth /> : <Account key={session.user.id} session={session} />}</>;
}

export default Login;
