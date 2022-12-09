import React from "react";
import { ItemProps } from "../../Models/types";

const Item: React.FC<ItemProps> = (props) => {
  return (
    <li>
      <header>
        <h3>{props.title}</h3>
        <div>
          ${props.total.toFixed(2)} <span>(${props.price}/item)</span>
        </div>
      </header>
      <div>
        <div>
          x <span>{props.quantity}</span>
        </div>
        <div>
          <button onClick={props.onRemoveItem}>-</button>
          <button onClick={props.onAddItem}>+</button>
          <button onClick={props.onClear}>Clear</button>
        </div>
      </div>
    </li>
  );
};

export default Item;
