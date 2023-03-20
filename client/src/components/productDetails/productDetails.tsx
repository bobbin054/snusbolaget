import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { IProduct } from '../../interfaces/IProduct';
import styles from './productDetails.module.scss';
export function ProductDetails() {
    const { name } = useParams();
    if (!name) return <div>Product not found</div>;
    const { getProduct } = useProducts();
    const product = getProduct(name);
    if (!product) return <div>Product not found</div>;
    return (
        <div className={styles.container}>
            <div className={styles.container__column}>
                <AboutTheProduct product={product}></AboutTheProduct>
            </div>
            <div> aa</div>
        </div>
    );
}

const AboutTheProduct = ({ product }: { product: IProduct }) => {
    return (
        <>
            <img className={styles.img} src={product?.imageUrl ?? ''} title={product?.name ?? ''} alt="product image" />
            <h2>{product?.name}</h2>
            <p>{product?.description}</p>
            <table>
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
            </table>
        </>
    );
};
