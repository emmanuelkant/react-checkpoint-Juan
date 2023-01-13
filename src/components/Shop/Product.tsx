import React from "react";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import Button from "../UI/Button";
import { wishActions } from "../../store/wishList-slice";
import { ListItems } from "../../Models/types";

const Product: React.FC<ListItems> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, price, image, isWished } = props;

  const itemObj = { // You don't need put "Obj" to identify it as an object, let the content speeks for it self. Just "item" or "data" or "productData" is enough
    id,
    title,
    price,
    image,
    quantity: 1,
    totalPrice: price,
    isWished,
  };

  const addToCartHandler = () => { // I like that you separate the function in another function. That let's your JSX clean and easy to read. Good one.
    dispatch(cartActions.addItemToCart(itemObj));
  };

  const addWishHandler = () => { // Good
    dispatch(wishActions.addToWishList(itemObj));
  };

  const removeWishHandler = () => { // Fantastic
    dispatch(wishActions.removeFromWishList(id));
  };

  const wishAria = !isWished
    ? "add item to wish list"
    : "remove item from wish list";

  return (
    <article className="product"> {/* Good use of the tags */}
      <img src={image} alt={title} className="product__image" />
      <div className="description">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">Price €{price}</p>
        <div className="product__actions">
          <div
            className="product__actions--button"
            aria-label="add item to cart"
          >
            <Button
              onClick={addToCartHandler}
              title={"Cart"}
              action={"Add cart"}
              classes={"button button-product"}
              classIcon={"icon"}
              quantity={""}
            />
          </div>
          <div className="product__actions--button" aria-label={wishAria}> {/* Accessibility! Always, ALWAYS FANTASTIC! But I think this should be on button it self. */}
            {!isWished && (
              <Button
                onClick={addWishHandler}
                title={"Wish List"}
                classes={"button"}
                classIcon={"icon-big"}
                quantity={""}
                action={""}
              />
            )}
            {isWished && (
              <Button
                onClick={removeWishHandler}
                title={"Wish List"}
                action={"Remove wish"}
                classes={"button button-product"}
                classIcon={"icon icon-red"}
                quantity={""}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
