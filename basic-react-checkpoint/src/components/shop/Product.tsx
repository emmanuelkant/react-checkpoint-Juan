import React from "react";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import "./Product.scss";
import { ListItems } from "../../Models/types";
import { wishActions } from "../../store/wishList-slice";

const Product: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, price, image, isWished } = props;
  console.log(isWished);
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
        isWish: false,
      })
    );
  };

  const addWishHandler = () => {
    dispatch(
      wishActions.addToWishList({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
        isWish: true,
      })
    );
  };

  const removeWishHandler = () => {
    dispatch(wishActions.removeFromWishList(id));
  };

  return (
    <div className="product">
      <img src={image} alt="" className="product-image" />
      <h3>{title}</h3>
      <p>Price €{price}</p>
      <div className="product-button">
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
      <div className="product-button">
        {!isWished && (
          <button onClick={addWishHandler}>Add to wish list</button>
        )}
        {isWished && (
          <button onClick={removeWishHandler}>Remove from wish list</button>
        )}
      </div>
    </div>
  );
};

export default Product;
