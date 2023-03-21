import { Link, Outlet } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { useSession } from "../../hooks/useSession";
import { CartPreview } from "../cartPreview/cartPreview";
import "./nav.scss";

export function Nav() {
  const { session } = useSession();
  const { profile } = useProfile({ session });
  return (
    <>
      <nav className="nav">
        <div className="nav__group">
          <Link className="nav__item" to="/">
            snus online
          </Link>
          <Link className="nav__item" to="/products">
            /products
          </Link>
          {profile.data?.admin && (
            <Link className="nav__item" to="/admin">
              /admin
            </Link>
          )}
        </div>
        <div className="nav__group">
          <Link className="nav__item" to="/login">
            <div className="nav__icon-group">
              <i className="fa fa-user fa-2x"></i>
              <p className="nav__icon-text">{profile?.data?.username ?? "Login"}</p>
            </div>
          </Link>
          <Link className="nav__item" to="/cart">
            <CartPreview />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
