import React from "react";
import { ItemProps } from "../../Models/types";
import "./Item.scss";

const Item: React.FC<ItemProps> = (props) => {
  return (
    <li>
      <header>
        <img src={props.image} alt={props.title} className="item-img" />
        <h3>{props.title}</h3>
        <div>
          ${props.total.toFixed(2)} <span>(${props.price}/item)</span>
        </div>
      </header>
      <div>
        {props.quantity > 1 && (
          <div>
            x <span>{props.quantity}</span>
          </div>
        )}
        <div>
          <button onClick={props.onRemoveItem}>-</button>
          <button onClick={props.onAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default Item;
