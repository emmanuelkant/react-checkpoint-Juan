import Product from "./Product";
import "./ProductsList.scss";
import useFetchPLP from "../Hooks/useFetchPLP";
import { Items, TApiResponse } from "../../Models/types";

const ProductsList: React.FC<any> = (props) => {
  const products: TApiResponse = useFetchPLP(
    "https://fakestoreapi.com/products?limit=6"
  );

  const [wishId] = props.wishList.items.map((wish: any) => wish.id);

  return (
    <>
      {products.loading && <p>Loading...</p>}
      {products.error && <p>Something went wrong ⛔️</p>}
      <div className="plp-container">
        {!products.loading &&
          products.data?.map((product: any) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              isWish={product.isWish}
              isWished={product.id === wishId ? true : false}
            />
          ))}
      </div>
    </>
  );
};

export default ProductsList;
