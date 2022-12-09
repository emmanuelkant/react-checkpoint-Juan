import React from "react";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import "./Product.scss";
import { ListItems } from "../../Models/types";

const Product: React.FC<ListItems> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, price, image } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
      })
    );
  };

  return (
    <div className="product">
      <img src={image} alt="" className="product-image" />
      <h3>{title}</h3>
      <p>Price €{price}</p>
      <div className="product-button">
        <button onClick={addToCartHandler}>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Product;
