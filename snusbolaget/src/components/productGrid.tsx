import { useProducts } from "../hooks/useProducts";
import styled from "styled-components";
import { Product } from "./product";

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, clamp(200px, 250px, 300px));
  justify-content: center;
  gap: 8px;
`;

export function ProductGrid() {
  const { products } = useProducts();
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
