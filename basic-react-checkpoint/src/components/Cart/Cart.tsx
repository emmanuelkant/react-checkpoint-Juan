import React from "react";
import { useAppSelector, useAppDispatch } from "../Hooks/redux-hooks";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";
import { Items } from "../../Models/types";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item: Items) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                image: item.image,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
          <button onClick={clearCartHandler}>CLEAR ALL</button>
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

export default Cart;
