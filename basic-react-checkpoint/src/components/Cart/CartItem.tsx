import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useAppDispatch } from "../Hooks/redux-hooks";
import Item from "../UI/Item";

const CartItem: React.FC<{
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
}> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, quantity, total, price } = props.item;

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image: "",
        quantity: 1,
        totalPrice: price,
      })
    );
  };

  return (
    <Item
      id={id}
      title={title}
      price={price}
      total={total}
      quantity={quantity}
      onAddItem={addItemHandler}
      onRemoveItem={removeItemHandler}
      onClear={clearCartHandler}
    />
    // <li>
    //   <header>
    //     <h3>{title}</h3>
    //     <div>
    //       ${total.toFixed(2)} <span>(${price}/item)</span>
    //     </div>
    //   </header>
    //   <div>
    //     <div>
    //       x <span>{quantity}</span>
    //     </div>
    //     <div>
    //       <button onClick={removeItemHandler}>-</button>
    //       <button onClick={addItemHandler}>+</button>
    //       <button onClick={clearCartHandler}>Clear</button>
    //     </div>
    //   </div>
    // </li>
  );
};

export default CartItem;
