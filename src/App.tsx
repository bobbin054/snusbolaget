import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [count, setCount] = useState(0);

  return <Nav />;
}

function Nav() {
  const [productList, setProductList] = useState<JSX.Element | null>(null);
  return (
    <>
      <nav className="nav">
        <div className="nav__left">
          <button className="nav__item mr-2" type="button">
            snushandeln.se
          </button>
          <button
            className="nav__item"
            type="button"
            onClick={() => {
              setProductList(<ProductList />);
            }}
          >
            Products
          </button>
        </div>
        <div className="nav__right">
          {/* Check if this div is nessessary */}

          <CartPreview />
        </div>
      </nav>
      {productList}
    </>
  );
}

function CartPreview() {
  return (
    <div className="cart-preview">
      <div className="cart-preview__left mr-l">
        <i className="fa fa-shopping-cart"></i>
        {/* {{ cartService.countTotalQuantity() }} */}
      </div>
      <div className="vl"></div>
      <div className="cart-preview__right">{/* {{ cartService.getTotalPrice() }} kr */}</div>
      <span className="fa fa-chevron-circle-right"></span>
    </div>
  );
}

function ProductList() {
  return (
    <>
      <div className="product-container">
        {PRODUCTS.map((product) => {
          return (
            <div className="product-container__item">
              <img src={product.imageUrl} title={product.name} className="product-container__img" alt="product image" />
              <div>{product.name}</div>
              <div>
                1 can - {product.price} kr
                <button
                  type="button"
                  className="fa fa-cart-plus product-container__button"
                  // (click)="this.cartService.addToCart(product)"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

const PRODUCTS: {
  id: number;
  name: string;
  type: string;
  nicotineAmount: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  nicotineLevel: string;
  taste: string;
  contentWeight: string;
  contentWeightUnit: string;
  producer: string;
}[] = [
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
  },
  {
    id: 4,
    name: "Göteborgs Rapé",
    type: "Portion",
    nicotineAmount: "8,5 mg/g",
    description:
      "Snus från Göteborgs Rapé har en lång historia, snuset har sålts i Sverige ända sedan 1919. Göteborgs Rapé-snuset har en speciell karaktär med en mild tobakssmak och viss sötma. Det har även inslag av färska örter och enbär. Göteborgs Rapé tillverkas av Swedish Match och finns tillgängligt i en mängd olika varianter.",
    price: 50,
    starRating: 3.5,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-874-2018-05-17-134527613/555/555/0/goteborgs-rape-white-portionssnus.png",
    nicotineLevel: "8.5mg/g",
    taste: "Traditionell",
    contentWeight: "24",
    contentWeightUnit: "g",
    producer: "Swedish Match",
  },
  {
    id: 5,
    name: "Röda Lacket",
    type: "Portion",
    nicotineAmount: "8,5 mg/g",
    description: "50% snus, 45% jenkasmak 5% barrsmak",
    price: 67.49,
    starRating: 3.5,
    imageUrl:
      "https://media.snusbolaget.se/snusbolaget/images/swm-808-2017-04-11-114503959/555/555/2/roda-lacket-lossnus.png",
    nicotineLevel: "8.5mg/g",
    taste: "Traditionell",
    contentWeight: "24",
    contentWeightUnit: "g",
    producer: "Swedish Match",
  },
];
