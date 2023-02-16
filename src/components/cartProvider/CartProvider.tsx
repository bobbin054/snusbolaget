import React, { ReactNode } from "react";
import { IProduct } from "../../interfaces/iProduct";
import { IProductInCart } from "../../interfaces/iProductInCart";

export interface ICartContext {
  productsInCart: IProductInCart[];
  add: (productToAdd: IProduct, numToAdd: number) => void;
  totalQuantity: number;
  totalPrice: number;
  decreaseQuantity: (productToDecrease: IProductInCart) => void;
  increaseQuantity: (productToIncrease: IProductInCart) => void;
  remove: (productToRemove: IProductInCart) => void;
}
const defaultProductsInCart: IProductInCart[] = [
  {
    id: 1,
    name: "Ettan",
    type: "Portion",
    nicotineAmount: "8,5 mg/g",
    description:
      "Ettan Portion är ett portionssnus med en traditionell tobakssmak. Fyllig, robust och lätt rökig. Ettan är tradition.",
    price: 45.9,
    starRating: 4.5,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-875-2022-01-18-101200567/555/555/2/ettan-portionssnus.png",
    nicotineLevel: "8.5mg/g",
    taste: "Traditionell",
    contentWeight: "24",
    contentWeightUnit: "g",
    producer: "Swedish Match",
    quantity: 4,
  },
  {
    id: 2,
    name: "Grov",
    type: "Portion",
    nicotineAmount: "8,5 mg/g",
    description:
      "Precis som namnet antyder är Grov Portion ett grövre snus. Det är det självklara valet för den som önskar lite mer känsla under läppen. Med en robust och avrundad, stark tobakssmak. Du kan känna toner av trä och läder, men smaken bär även en viss nötighet och sötma i en balanserad kombination.        Prillorna är uppdaterade med ett porösare papper för en närmare tobaksupplevelse.​        Grovsnus har en lång historia.Snuset blev snabbt populärt på 1800 - talet och tillverkas än idag efter ett recept som är mer än 100 år gammalt.        Finns både som lössnus och portion.Märket blev först tillverkat i Norrland,        innan Swedish Match tog över produktionen som nu ligger i södra Sverige.        ",
    price: 48.5,
    starRating: 5,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-855-2020-07-27-093759394/555/555/0/grov-portionssnus.png",
    nicotineLevel: "8.5mg/g",
    taste: "Traditionell",
    contentWeight: "24",
    contentWeightUnit: "g",
    producer: "Swedish Match",
    quantity: 2,
  },
  {
    id: 3,
    name: "General",
    type: "Portion",
    nicotineAmount: "8,5 mg/g",
    description:
      "General, tidigare kallat Generalsnus, framställs av Swedish Match. Det är en av Sveriges genom tiderna största titlar med långa och anor. Generals snus görs på en blandning av över 20 olika tobakssorter som kompletteras med bergamottolja. Smakerna i sortimentet innehåller även peppar och en antydan av citrus. General finns i alla möjliga former; General Lös, General Portion, General Mini, General White, General XR och även som stark snus.",
    price: 50,
    starRating: 3.2,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-880-2020-10-12-103510322/555/555/0/general-portionssnus.png",
    nicotineLevel: "8.5mg/g",
    taste: "Traditionell",
    contentWeight: "24",
    contentWeightUnit: "g",
    producer: "Swedish Match",
    quantity: 2,
  },
];

export const CartContext = React.createContext<ICartContext>({
  productsInCart: [],
  add: () => {},
  remove: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [productsInCart, setProductsInCart] = React.useState<IProductInCart[]>([]);

  const totalPrice = productsInCart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const totalQuantity = productsInCart.reduce((acc, p) => acc + p.quantity, 0);

  const add = (productToAdd: IProduct, numToAdd = 1) => {
    const alreadyAddedProduct = productsInCart.find((p) => p.name === productToAdd.name);
    if (alreadyAddedProduct) {
      alreadyAddedProduct.quantity += numToAdd;
      setProductsInCart([...productsInCart]);
    } else {
      productsInCart.push({ ...productToAdd, quantity: 1 });
      setProductsInCart([...productsInCart]);
    }
  };

  const decreaseQuantity = (product: IProductInCart) => {
    product.quantity--;
    if (product.quantity <= 0) {
      remove(product);
    } else {
      setProductsInCart([...productsInCart]);
    }
  };

  const remove = (productToRemove: IProductInCart) => {
    setProductsInCart(productsInCart.filter((p) => p.id !== productToRemove.id));
  };

  const increaseQuantity = (product: IProductInCart) => {
    product.quantity++;
    setProductsInCart([...productsInCart]);
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        add: add,
        remove,
        totalQuantity,
        totalPrice,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
