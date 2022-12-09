import React from "react";
import { useAppSelector } from "../Hooks/redux-hooks";
import CartItem from "./CartItem";
import { Items } from "../../Models/types";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item: Items) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default Cart;
