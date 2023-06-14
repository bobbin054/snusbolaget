import { useProductsAPI } from "../hooks/useProducts";
import styled from "styled-components";
import { Product } from "./product";

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 1vw;
  margin-inline: min(20vw, 20%);
  @media (width <= 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
  @media (width <= 412px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width <= 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function ProductGrid() {
  const { products } = useProductsAPI();
  return (
    <>
      {!products && <div>Loading ...</div>}
      <ProductListContainer>
        {products?.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </ProductListContainer>
    </>
  );
}
