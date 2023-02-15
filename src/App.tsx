import { Nav } from "./components/nav/nav";
import { CartProvider } from "./components/cartProvider/cartProvider";
import { ProductsProvider } from "./components/productsProvider/productsProvider";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./components/productList/productList";
import { Cart } from "./components/cart/cart";
import "font-awesome/css/font-awesome.min.css";
import "./app.scss";
import { ProductDetails } from "./components/productDetails/productDetails";

export default function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<div>Snus is tasty</div>} />
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":name" element={<ProductDetails />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<div>You shall not pass!</div>} />
          </Route>
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}
