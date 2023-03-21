import Auth from "../auth/auth";
import Account from "../account/account";
import { useSession } from "../../hooks/useSession";

function Login() {
  const { session } = useSession();
  return <>{!session ? <Auth /> : <Account key={session.user.id} session={session} />}</>;
}

export default Login;
