import { PRODUCTS } from "../assets/products";

export function ProductService() {
  const _productUrl = "assets/products.json";

  function getProducts() {
    return PRODUCTS;
  }
}
