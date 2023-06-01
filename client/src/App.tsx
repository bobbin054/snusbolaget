import { Nav } from "./components/nav";
import { CartProvider } from "./components/cartProvider";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { ProductList } from "./components/productList/productList";
import { Cart } from "./components/cart/cart";
import { ProductDetails } from "./components/productDetails";
import "font-awesome/css/font-awesome.min.css";
import "./app.scss";
import { Admin } from "./components/admin/admin";
import Login from "./components/login";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<div>Snus is tasty!!!</div>} />
            <Route path="products">
              <Route index element={<ProductList />} />
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
