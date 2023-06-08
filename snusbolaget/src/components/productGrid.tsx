import { useProductsAPI } from "../hooks/useProducts";
import styled from "styled-components";
import { Product } from "./product";

const ProductListContainer = styled.div`
  // css var column width
  display: grid;
  justify-content: center;
  --columnWidth: 300px;
  grid-template-columns: repeat(auto-fit, minmax(var(--columnWidth), 1fr));
  min-width: calc(4 * var(--columnWidth));
  --columnGap: 8px;
  max-width: calc(4 * var(--columnWidth) + 3 * var(--columnGap));
  gap: var(--columnGap);
  margin-inline: 88px;
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
