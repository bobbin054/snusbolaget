import React from "react";
import { PRODUCTS_ENDPOINT, useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../interfaces/IProduct";
import axios from "axios";

export default () => {
  const { products } = useProducts();
  if (!products) return <div>Loading...</div>;

  return (
    <>
      {products?.map((product) => (
        <ProductForm key={product.id} product={product} />
      ))}
    </>
  );
};

const ProductForm = ({ product }: { product: IProduct }) => {
  const [pendingProduct, setPendingProduct] = React.useState(product);
  const descId = React.useId();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.patch(`${PRODUCTS_ENDPOINT}/${product.id}`, pendingProduct);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPendingProduct({ ...pendingProduct, description: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={descId}>Product name</label>
      <input id={descId} type="text" value={pendingProduct.description} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};
