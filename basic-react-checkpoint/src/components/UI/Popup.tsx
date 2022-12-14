import React from "react";
import { useAppSelector, useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import Modal from "./Modal";
import Button from "./Button";
import { Items } from "../../Models/types";
import { wishActions } from "../../store/wishList-slice";
import PopupItem from "./PopupItem";

const Popup: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishItems = useAppSelector((state) => state.wish.items);

  const showCart = useAppSelector((state) => state.ui.showCart);

  const popupItems = showCart ? cartItems : wishItems;

  const popupTitle = showCart ? "Your Shopping Cart" : "Your Wish List";
  const emptyMessage = showCart
    ? "Your cart is empty"
    : "Your wish list is empty";

  const clearHandler = showCart
    ? () => {
        dispatch(cartActions.clearCart());
      }
    : () => {
        dispatch(wishActions.clearWishList());
      };

  const toggleHandler = showCart
    ? () => {
        dispatch(uiActions.toggle());
      }
    : () => {
        dispatch(uiActions.toggleWish());
      };

  return (
    <Modal onClose={toggleHandler}>
      <h2>{popupTitle}</h2>
      {popupItems.length > 0 ? (
        <ul>
          {popupItems.map((item: Items) => (
            <PopupItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                image: item.image,
                total: item.totalPrice,
                price: item.price,
                isWished: item.isWished,
              }}
            />
          ))}
          <button onClick={clearHandler}>CLEAR ALL</button>
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
      <Button onClick={toggleHandler} title={"Close"} />
    </Modal>
  );
};

export default Popup;
