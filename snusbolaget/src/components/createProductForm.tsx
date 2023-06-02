import React from "react";
import { useProducts } from "../hooks/useProducts";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
`;
const StyledImg = styled.img`
  width: 100px;
  height: auto;
`;
export function CreateProductForm() {
  const { products, mutate } = useProducts();
  const [pendingProduct, setPendingProduct] = React.useState({
    id: undefined,
    name: "",
    type: "",
    nicotineAmount: "",
    description: "",
    price: 0,
    starRating: 1,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-874-2018-05-17-134527613/555/555/0/goteborgs-rape-white-portionssnus.png",
    nicotineLevel: "",
    taste: "",
    contentWeight: "",
    contentWeightUnit: "g",
    producer: "",
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
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
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
      <StyledImg src={pendingProduct.imageUrl} alt={pendingProduct.name} />
      <button type="submit">Create (NOT IMPLEMENTED)</button>
    </StyledForm>
  );
}
