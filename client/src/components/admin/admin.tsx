import React from "react";
import { PRODUCTS_ENDPOINT, useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../interfaces/IProduct";
import axios from "axios";
import styles from "./admin.module.scss";

export default () => {
  const { products } = useProducts();
  if (!products) return <div>Loading...</div>;

  return (
    <>
      {products?.map((product) => (
        <UpdateProductForm key={product.id} product={product} />
      ))}
    </>
  );
};

const UpdateProductForm = ({ product }: { product: IProduct }) => {
  const [pendingProduct, setPendingProduct] = React.useState(product);
  const descId = React.useId();
  const priceId = React.useId();
  const imageUrlId = React.useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axios.put(`${PRODUCTS_ENDPOINT}/${product.id}`, pendingProduct);
    console.log(result);
  };
  return (
    <form className={styles.formColumn} onSubmit={handleSubmit}>
      <label htmlFor={descId}>Description</label>
      <input
        id={descId}
        type="text"
        value={pendingProduct.description}
        onChange={(e) => setPendingProduct({ ...pendingProduct, description: e.target.value })}
      />
      <label htmlFor={priceId}>Price</label>
      <input
        id={priceId}
        type="number"
        value={pendingProduct.price}
        onChange={(e) => setPendingProduct({ ...pendingProduct, price: Number(e.target.value) })}
      />
      <label htmlFor={imageUrlId}>Image URL</label>
      <input
        id={imageUrlId}
        type="url"
        value={pendingProduct.imageUrl}
        onChange={(e) => setPendingProduct({ ...pendingProduct, imageUrl: e.target.value })}
      />
      Image preview:
      <img className={styles.imagePreview} src={pendingProduct.imageUrl} alt={pendingProduct.name} />
      <button type="submit">Save</button>
    </form>
  );
};

const PatchField = ({ product }: { product: IProduct }) => {
  const [pendingProduct, setPendingProduct] = React.useState(product);
  const patchDescId = React.useId();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axios.patch(`${PRODUCTS_ENDPOINT}/${product.id}`, [
      {
        op: "replace",
        path: "/description",
        value: pendingProduct.description,
      },
    ]);
    console.log(result);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPendingProduct({ ...pendingProduct, description: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={patchDescId}>Description</label>
      <input id={patchDescId} type="text" value={pendingProduct.description} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};
