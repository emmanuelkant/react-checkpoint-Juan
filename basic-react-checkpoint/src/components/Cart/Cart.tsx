import React from "react";
import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item: any) => (
          <CartItem
            item={{
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
