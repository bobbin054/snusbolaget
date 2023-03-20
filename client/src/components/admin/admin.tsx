import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../interfaces/IProduct";
import axios from "axios";
import styles from "./admin.module.scss";

export default () => {
  const { products, isLoading } = useProducts();
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <CreateProductForm />
      {products?.map((product) => (
        <UpdateProductForm key={product.id} product={product} />
      ))}
    </>
  );
};

const UpdateProductForm = ({ product }: { product: IProduct }) => {
  const { products, mutate, updateProduct } = useProducts();
  const [pendingProduct, setPendingProduct] = React.useState<IProduct | null>(product);
  const descId = React.useId();
  const priceId = React.useId();
  const imageUrlId = React.useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!pendingProduct) return;
    console.log("pendingProduct: ", pendingProduct);
    
    const result = await updateProduct(pendingProduct);
    // const result = await axios.put(`${PRODUCTS_ENDPOINT}/${product.id}`, pendingProduct);
    console.log(result);
  };
  const handleDelete = async () => {
    const result = await axios.delete(`${PRODUCTS_ENDPOINT}/${product.id}`);
    if (result.status === 204) {
      if (pendingProduct) {
        const newProducts = products?.filter((p) => p.id !== pendingProduct.id);
        mutate(newProducts);
      }
    }
  };
  if (pendingProduct === null) {
    return null;
  }
  return (
    <form className={styles.formColumn} onSubmit={handleSubmit}>
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
      <img className={styles.imagePreview} src={pendingProduct.imageUrl} alt={pendingProduct.name} />
      <div className={styles.buttons}>
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
};

const CreateProductForm = () => {
  const { products, mutate } = useProducts();
  const [pendingProduct, setPendingProduct] = React.useState<IProduct>({
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
    e.preventDefault();
    const result = await axios.post(PRODUCTS_ENDPOINT, pendingProduct);
    if (result.status === 201 && products) {
      mutate([...products, pendingProduct]);
    }
  };
  return (
    <form className={styles.formColumn} onSubmit={handleSubmit}>
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
      <img className={styles.imagePreview} src={pendingProduct.imageUrl} alt={pendingProduct.name} />
      <button type="submit">Create</button>
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
