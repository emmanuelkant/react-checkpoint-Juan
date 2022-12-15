import Product from "./Product";
import "./ProductsList.scss";
import useFetchPLP from "../Hooks/useFetchPLP";
import { Items, TApiResponse } from "../../Models/types";
import { PLP_URL } from "../../Models/config";
import { useState } from "react";

const ProductsList: React.FC<any> = (props) => {
  const [category, setCategory] = useState<string>("");
  const [urlChanged, setUrlChanged] = useState<boolean>(false);
  const wishId = props.wishList.items.map((wish: any) => wish.id);

  const handleCat = (e: any) => {
    e.preventDefault();
    setCategory(e.target.value);
    setUrlChanged(true);
  };
  const products: TApiResponse = useFetchPLP(PLP_URL);
  console.log(typeof category);

  const plpData =
    !urlChanged || category === "All"
      ? products.data
      : products.data?.filter((product: any) => product.category === category);

  const mapping = plpData?.map((product: any) => (
    <Product
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      isWished={wishId.includes(product.id) && true}
    />
  ));

  return (
    <>
      {products.loading && <p>Loading...</p>}
      {products.error && <p>Something went wrong ⛔️</p>}
      <div className="categories">
        {category !== "All" && <p>{category.toUpperCase()}</p>}
        <div className="categories__filter">
          <label htmlFor="category">Filters</label>
          <select name="category" id="category" onChange={handleCat}>
            <option value="All">All categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
      </div>
      <div className="plp-container">{!products.loading && mapping}</div>
    </>
  );
};

export default ProductsList;
