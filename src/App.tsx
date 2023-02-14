import "./App.scss";
import "font-awesome/css/font-awesome.min.css";
import { Nav } from "./components/nav/nav";
import { CartContext, CartProvider } from "./components/cartProvider/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <Nav />
    </CartProvider>
  );
}
