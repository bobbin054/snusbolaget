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
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  * {
    width: 100%;
  }
`;
export function UpdateProductForm({ product }) {
  const { products, mutate, updateProduct } = useProducts();
  const [pendingProduct, setPendingProduct] = React.useState(product);
  const descId = React.useId();
  const priceId = React.useId();
  const imageUrlId = React.useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pendingProduct) return;
    const result = await updateProduct(pendingProduct);
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
    <StyledForm onSubmit={handleSubmit}>
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
      <StyledButton>
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </StyledButton>
    </StyledForm>
  );
}
