import React from "react";
import { cartActions } from "../../store/cart-slice";
import { wishActions } from "../../store/wishList-slice";
import { useAppDispatch } from "../Hooks/redux-hooks";
import Item from "../UI/Item";

const WishListItem: React.FC<{
  item: {
    id: string;
    title: string;
    image: string;
    quantity: number;
    total: number;
    price: number;
    isWish: boolean;
  };
}> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, quantity, price, image } = props.item;

  const removeItemHandler = () => {
    dispatch(wishActions.removeFromWishList(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        totalPrice: price,
        quantity: 1,
        isWish: false,
      })
    );
  };

  return (
    <Item
      id={id}
      title={title}
      price={price}
      total={price}
      image={image}
      quantity={quantity}
      onAddItem={addItemHandler}
      onRemoveItem={removeItemHandler}
    />
  );
};

export default WishListItem;
