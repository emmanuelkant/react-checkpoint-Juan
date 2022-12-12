import { Items, ListItems } from "../../Models/types";
import { useEffect, useState } from "react";
import { TApiResponse } from "../../Models/types";
import axios from "axios";

// const useFetchPLP = (url: string) => {
//   const [products, setProducts] = useState<ListItems[]>([]);
//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(url);

//       try {
//         if (!response.ok) throw new Error("Something went wrong :(");

//         const responseData = await response.json();

//         const productsList: Items[] = [];

//         for (const key in responseData) {
//           productsList.push({
//             id: key,
//             title: responseData[key].title,
//             image: responseData[key].image,
//             price: responseData[key].price,
//             quantity: 0,
//             totalPrice: 0,
//             isWish: responseData[key].isWish,
//           });
//         }
//         setProducts(productsList);
//       } catch (error: any) {
//         console.error(error.message);
//       }
//     };
//     getData();
//   }, [url]);

//   return products;
// };

export const useFetchPLP = (url: string): TApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const apiResponse = await axios.get(url);
      //const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(apiResponse.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { status, statusText, data, error, loading };
};

export default useFetchPLP;
