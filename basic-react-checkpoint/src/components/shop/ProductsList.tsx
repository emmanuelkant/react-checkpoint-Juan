import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }

      const responseData = await response.json();
      const productsList: any[] = [];

      for (const key in responseData) {
        productsList.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          price: responseData[key].price,
        });
      }

      setProducts(productsList);
    };
    fetchData();
  }, []);

  return (
    <div>
      {products?.map((product: any) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
