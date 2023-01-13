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

  let amount: number[] = [];
  cartItems.map((item) => amount.push(item.totalPrice));
  const totalAmount: number = amount.reduce( // Very well use of the .reduce(), I think this is the most difficult array function for me.
    (curNumber: number, totalItem: number) => {
      return curNumber + totalItem;
    },
    0
  );

  const popupItems = showCart ? cartItems : wishItems;

  const popupTitle = showCart ? "Your Shopping Cart" : "Your Wish List"; // I like this you did. You create a variable for store the title. Could be simple but this makes a hug difference for understanding your code, a lot of people will do it directly in JSX, I don't like it, I like to give name to everything I could in programming, it let the code easy to read and to understand. In general your code has a very good readability.
  const emptyMessage = showCart // But I note something. Actully this message should came from props, that way this component will become more generic.
    ? "Your cart is empty"
    : "Your wish list is empty";

  const clearHandler = showCart // Yeah, definitively it should come from props, you will reduce the amount of the if steatments that you have.
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

  const classColor = showCart ? "bg-blue" : "bg-red";

  return (
    <Modal onClose={toggleHandler}>
      <h2 className={`popup-title ${classColor}`}>{popupTitle}</h2>
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
          <div className="total">
            {showCart && <p>Total: €{totalAmount.toFixed(2)}</p>}
            <button onClick={clearHandler} className="bg-blue">
              Clear all
            </button>
          </div>
        </ul>
      ) : (
        <p className="empty-message">{emptyMessage}</p>
      )}
      <Button
        onClick={toggleHandler}
        title={"Close"}
        classes={"button button-hover"}
        quantity={""}
        classIcon={""}
        action={""}
      />
    </Modal>
  );
};

export default Popup;
