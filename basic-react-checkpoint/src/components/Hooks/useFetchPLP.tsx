import { Items, ListItems } from "../../Models/types";
import { useEffect, useState } from "react";

const useFetchPLP = (url: string) => {
  const [products, setProducts] = useState<ListItems[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);

      try {
        if (!response.ok) throw new Error("Something went wrong :(");

        const responseData = await response.json();

        const productsList: Items[] = [];

        for (const key in responseData) {
          productsList.push({
            id: key,
            title: responseData[key].title,
            image: responseData[key].image,
            price: responseData[key].price,
            quantity: 0,
            totalPrice: 0,
          });
        }
        setProducts(productsList);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    getData();
  }, [url]);

  return products;
};

export default useFetchPLP;
