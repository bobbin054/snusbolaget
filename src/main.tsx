import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./components/productList/productList";
import { Nav } from "./components/nav/nav";
import { Cart } from "./components/cart/cart";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<div>Snus is tasty</div>} />
            <Route path="products" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<div>You shall not pass!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </App>
  </React.StrictMode>
);
