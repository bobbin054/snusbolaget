import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../interfaces/IProduct";
import styled from "styled-components";

export function ProductDetails() {
  const { name } = useParams();
  const { getProduct } = useProducts();
  if (!name) return <div>Product not found</div>;
  const product = getProduct(name);
  if (!product) return <div>Product not found</div>;
  return (
    <FlexDiv>
      <div>
        <AboutTheProduct product={product}></AboutTheProduct>
      </div>
      <div> aa</div>
    </FlexDiv>
  );
}

const AboutTheProduct = ({ product }: { product: IProduct }) => {
  return (
    <>
      <Img src={product?.imageUrl ?? ""} title={product?.name ?? ""} alt="product image" />
      <H2>{product?.name}</H2>
      <p>{product?.description}</p>
      <Table>
        <thead>
          <tr>
            <th>Product facts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{product?.name}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{product?.type}</td>
          </tr>
          <tr>
            <td>Nicotine amount</td>
            <td>{product?.nicotineAmount}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{product?.price}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{product?.starRating}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{product?.taste}</td>
          </tr>
          <tr>
            <td>Content weight</td>
            <td>
              {product?.contentWeight}
              {product?.contentWeightUnit}
            </td>
          </tr>
          <tr>
            <td>producer</td>
            <td>{product?.producer}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
`;
const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`;
const H2 = styled.h2`
  border-top: 4px solid #f8f8f8;
  text-decoration: overline solid #f8f8f8;
  text-align: center;
`;
const Img = styled.img`
  max-width: 50%;
  display: block;
  margin-inline: auto;
`;
