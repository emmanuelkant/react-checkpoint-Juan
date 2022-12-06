import React from "react";

const CartItem: React.FC<{
  item: { title: string; quantity: number; total: number; price: string };
}> = (props) => {
  const { title, quantity, total, price } = props.item;

  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div>
          ${total.toFixed(2)} <span>(${price}/item)</span>
        </div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
