import React from "react";
import { cartActions } from "../../store/cart-slice";
import { wishActions } from "../../store/wishList-slice";
import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks";
import "./PopupItem.scss";

const PopupItem: React.FC<{
  item: {
    id: string;
    title: string;
    image: string;
    quantity: number;
    total: number;
    price: number;
    isWished: boolean;
  };
}> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, quantity, total, price, image } = props.item;

  const showCart = useAppSelector((state) => state.ui.showCart);
  const showWishList = useAppSelector((state) => state.ui.showWishList);

  const actions = showCart ? cartActions : wishActions;

  console.log(actions);

  const removeItems = showCart
    ? cartActions.removeItemFromCart
    : wishActions.removeFromWishList;

  const removeItemHandler = () => {
    dispatch(removeItems(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
        isWished: false,
      })
    );
  };

  return (
    <li>
      <header>
        <img src={image} alt={title} className="item-img" />
        <h3>{title}</h3>
        <div>
          ${total.toFixed(2)} <span>(${price}/item)</span>
        </div>
      </header>
      <div>
        {quantity > 1 && (
          <div>
            x <span>{quantity}</span>
          </div>
        )}
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default PopupItem;
