import { Nav } from "./components/nav/nav";
import { CartProvider } from "./components/cartProvider/cartProvider";
import { ProductsProvider } from "./components/productsProvider/productsProvider";
import { ProductList } from "./components/productList/productList";
import { Cart } from "./components/cart/cart";
import "font-awesome/css/font-awesome.min.css";
import "./app.scss";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
}
