import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CartPreview } from "../cartPreview/cartPreview";
import "./nav.scss";

export function Nav() {
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
        </div>
        <div className="nav__group">
        <Link className="nav__item" to="/cart">
            <CartPreview />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}