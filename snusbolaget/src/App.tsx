import { Nav } from "./components/nav";
import { CartProvider } from "./components/cartProvider";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { ProductGrid } from "./components/productGrid";
import { Cart } from "./components/cart";
import { ProductDetails } from "./components/productDetails";
import "font-awesome/css/font-awesome.min.css";
import "./app.scss";
import { Admin } from "./components/admin";
import Login from "./components/login";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nav />
                <Outlet />
              </div>
            }
          >
            <Route
              path="/"
              element={
                <div className="flex items-center justify-center h-screen">
                  <div className="text-center">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Girl using a snus"
                    />
                    <b>This could be you</b>
                  </div>
                </div>
              }
            />
            <Route path="products">
              <Route index element={<ProductGrid />} />
              <Route path=":name" element={<ProductDetails />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<div>You shall not pass!</div>} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
