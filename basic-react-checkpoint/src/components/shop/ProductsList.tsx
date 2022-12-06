import { useEffect, useState } from "react";
import { Items } from "../../Models/Items";
import Product from "./Product";
import "./ProductsList.scss";

const ProductsList = () => {
  const [products, setProducts] = useState<Items[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }

      const responseData = await response.json();
      const productsList: Items[] = [];

      for (const key in responseData) {
        productsList.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          price: responseData[key].price,
          quantity: null,
          totalPrice: undefined,
        });
      }

      setProducts(productsList);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="plp-container">
        {products?.map((product: Items) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={null}
            totalPrice={undefined}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
