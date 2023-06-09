import { useProductsAPI } from "../hooks/useProducts";
import { CreateProductForm } from "./createProductForm";
import { UpdateProductForm } from "./updateProductForm";

export function Admin() {
  const { products, isLoading } = useProductsAPI();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <CreateProductForm />
      {products?.map((product) => (
        <UpdateProductForm key={product.id} product={product} />
      ))}
    </>
  );
}


