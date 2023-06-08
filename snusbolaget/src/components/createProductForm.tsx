import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductForm from "./productForm";
export function CreateProductForm() {
  const { products, mutate } = useProducts();
  const [pendingProduct, setPendingProduct] = React.useState({
    id: undefined,
    name: "",
    type: "Portion",
    nicotineAmount: "",
    description: "",
    price: 0,
    starRating: 1,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-874-2018-05-17-134527613/555/555/0/goteborgs-rape-white-portionssnus.png",
    nicotineLevel: "",
    taste: "god",
    contentWeight: "20",
    contentWeightUnit: "g",
    producer: "Swedish Match",
  });
  const nameId = React.useId();
  const descId = React.useId();
  const priceId = React.useId();
  const imageUrlId = React.useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // const result = await axios.post(PRODUCTS_ENDPOINT, pendingProduct);
    // if (result.status === 201 && products) {
    //   mutate([...products, pendingProduct]);
    // }
    // setPendingProduct({
    //   id: undefined,
    


    mutate([products, pendingProduct]);
  };
  return (
    <ProductForm onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        required
        type="text"
        value={pendingProduct.name}
        onChange={(e) => setPendingProduct({ ...pendingProduct, name: e.target.value })}
      />
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
        required
        value={pendingProduct.price}
        onChange={(e) => setPendingProduct({ ...pendingProduct, price: Number(e.target.value) })}
      />
      <label htmlFor={imageUrlId}>Image URL</label>
      <input
        id={imageUrlId}
        required
        type="url"
        value={pendingProduct.imageUrl}
        onChange={(e) => setPendingProduct({ ...pendingProduct, imageUrl: e.target.value })}
      />
      Image preview:
      <img  src={pendingProduct.imageUrl} alt={pendingProduct.name} className="w-20" />
      <button type="submit" className="rounded-lg border-green-600 border-solid border-2 text-base transition-all hover:bg-green-600 hover:text-white">Create (NOT IMPLEMENTED)</button>
    </ProductForm>
  );
}
