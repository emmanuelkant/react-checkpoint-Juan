import React from "react";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import Button from "../UI/Button";
import "./Product.scss";
import { wishActions } from "../../store/wishList-slice";

const Product: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, price, image, isWished } = props;

  const itemObj = {
    id,
    title,
    price,
    image,
    quantity: 1,
    totalPrice: price,
    isWished,
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(itemObj));
  };

  const addWishHandler = () => {
    dispatch(wishActions.addToWishList(itemObj));
  };

  const removeWishHandler = () => {
    dispatch(wishActions.removeFromWishList(id));
  };

  return (
    <div className="product">
      <img src={image} alt={title} className="product__image" />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">Price €{price}</p>
      <div className="product__actions">
        <div className="product__actions--button">
          <Button
            onClick={addToCartHandler}
            title={"Cart"}
            action={"Add cart"}
          />
        </div>
        <div className="product__actions--button">
          {!isWished && <Button onClick={addWishHandler} title={"Wish List"} />}
          {isWished && (
            <Button
              onClick={removeWishHandler}
              title={"Wish List"}
              action={"Remove wish"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
