import React, { useEffect, useState } from "react";

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
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
