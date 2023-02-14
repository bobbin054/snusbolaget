import "./App.scss";
import "font-awesome/css/font-awesome.min.css";
import { Nav } from "./components/nav/nav";
import { CartContext, CartProvider } from "./components/cartProvider/cartProvider";
import { ProductsProvider } from "./components/productsProvider/productsProvider";

export default function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Nav />
      </ProductsProvider>
    </CartProvider>
  );
}
