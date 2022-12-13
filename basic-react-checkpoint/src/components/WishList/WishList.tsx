import React from "react";
import { useAppSelector, useAppDispatch } from "../Hooks/redux-hooks";
import { wishActions } from "../../store/wishList-slice";
import { uiActions } from "../../store/ui-slice";
import WishListItem from "./WishListItem";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { Items } from "../../Models/types";

const WishList: React.FC = () => {
  const dispatch = useAppDispatch();
  const wishItems = useAppSelector((state) => state.wish.items);

  const clearWishHandler = () => {
    dispatch(wishActions.clearWishList());
  };

  const toggleWishHandler = () => {
    dispatch(uiActions.toggleWish());
  };

  return (
    <Modal onClose={toggleWishHandler}>
      <h2>Your Shopping WishList</h2>
      {wishItems.length > 0 ? (
        <ul>
          {wishItems.map((item: Items) => (
            <WishListItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
                isWish: item.isWish,
              }}
            />
          ))}
          <button onClick={clearWishHandler}>CLEAR WISH LIST</button>
        </ul>
      ) : (
        <p>Your wish list is empty</p>
      )}
      <Button onClick={toggleWishHandler} title={"Close"}></Button>
    </Modal>
  );
};

export default WishList;
