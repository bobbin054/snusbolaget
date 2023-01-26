import { PRODUCTS } from "../assets/Products";

export function ProductService() {
  const _productUrl = "assets/products.json";

  function getProducts() {
    return PRODUCTS;
  }
}
