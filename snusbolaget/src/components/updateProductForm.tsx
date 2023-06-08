import React from "react";
import { useProductsAPI } from "../hooks/useProducts";
import ProductForm from "./productForm";

export function UpdateProductForm({ product }) {
  const {updateProduct } = useProductsAPI();
  const [pendingProduct, setPendingProduct] = React.useState(product);
  const descId = React.useId();
  const priceId = React.useId();
  const imageUrlId = React.useId();
  const handleSubmitUpdateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pendingProduct) return;
    await updateProduct(pendingProduct);
  };
  const handleDelete = async () => {
    // const result = await axios.delete(`${PRODUCTS_ENDPOINT}/${product.id}`);
    // if (result.status === 204) {
    //   if (pendingProduct) {
    //     const newProducts = products?.filter((p) => p.id !== pendingProduct.id);
    //     mutate(newProducts);
    //   }
    // }
  };
  if (pendingProduct === null) {
    return null;
  }
  return (
    <ProductForm onSubmit={handleSubmitUpdateProduct}>
      <label htmlFor={descId}>Description</label>
      <textarea
        id={descId}
        value={pendingProduct.description}
        rows={5}
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
      <img src={pendingProduct.imageUrl} alt={pendingProduct.name} className="w-20" />
      <div className="grid grid-cols-2 gap-4">
        <button
          type="submit"
          className="rounded-lg border-green-600 border-solid border-2 text-base transition-all hover:bg-green-600 hover:text-white"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg border-red-600 border-solid border-2 text-base transition-all hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </ProductForm>
  );
}
