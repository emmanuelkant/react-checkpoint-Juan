import Product from "./Product";
import { useAppSelector } from "../Hooks/redux-hooks";
import useFetchPLP from "../Hooks/useFetchPLP";
import { ListItems, TApiResponse } from "../../Models/types";
import { PLP_URL } from "../../Models/config";
import { useState } from "react";
import { Filter } from "../../assets/IconsSvg"; // I think it is better import this guy as "FilterIcon" just to improve the readability.
import Spinner from "../UI/Spinner";

const ProductsList: React.FC<ListItems | any> = (props) => {
  const notification = useAppSelector((state) => state.ui.notification);
  const [category, setCategory] = useState<string>("");
  const [urlChanged, setUrlChanged] = useState<boolean>(false); // I think you don't need this state. I will explain more later.
  const wishId = props.wishList.items.map((wish: ListItems) => wish.id);

  const handleCategory = (e: any) => { // About UrlChanged. This function will be called every time that the user change the select. So every time that change the select, do the filter. You don't need to check if other thing has changed
    e.preventDefault();
    setCategory(e.target.value);
    setUrlChanged(true);
  };
  const products: TApiResponse = useFetchPLP(PLP_URL);

  const plpData = // This (pdpData) should be a state, because that will change constantly. So every time that select changes, change the plpData and than it will change the whole component.
    !urlChanged || category === "All"
      ? products.data
      : products.data?.filter(
          (product: ListItems) => product.category === category
        );

  const mapping = plpData?.map((product: ListItems) => ( // The name of this varible is not to good, I think it could be "products" or "productsToRender" or maybe "mappedProducts".
    <Product
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      category={product.category}
      isWished={wishId.includes(product.id) && true} // The function .includes() already returns a boolean, so you don't need to foring returns true
    />
  ));

  return (
    <>
      {!notification && (
        <div className="categories" aria-label="categories">
          <header>
            {category !== "All" ? <p>{category.toUpperCase()}</p> : <p></p>}
          </header>
          <div className="categories__filter">
            <label htmlFor="category">
              Filter <Filter />
            </label>
            <select name="category" id="category" onChange={handleCategory}>
              <option value="All">All categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </div>
        </div>
      )}
      {products.error && ( // Nice error handler, everything can break one day
        <p className="went-wrong">Ups!... Something went wrong ⛔️</p>
      )}
      {products.loading && ( // Nice loading handler, everything can took longer than  we thought
        <div className="loading">
          <Spinner />
          <p>Loading...</p>
        </div>
      )}
      <div className="plp-container" aria-label="products list"> {/* Accessibility again, wonderful. */}
        {!products.loading && mapping}
      </div>
    </>
  );
};

export default ProductsList;
