import { Nav } from "./components/nav/nav";
import { CartProvider } from "./components/cartProvider/cartProvider";
import { ProductsProvider } from "./components/productsProvider/productsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./components/productList/productList";
import { Cart } from "./components/cart/cart";
import "font-awesome/css/font-awesome.min.css";

export default function App() {
  return (
    <CartProvider>
      <ProductsProvider>
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
      </ProductsProvider>
    </CartProvider>
  );
}
