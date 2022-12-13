import React from "react";
import { CartIcon, WishIcon } from "../../assets/IconsSvg";
import "./Button.scss";

const Button: React.FC<any> = (props) => {
  const buttonColor =
    props.title === "Remove from wish list" ? "orange" : "green";

  return (
    <button onClick={props.onClick} className={`button button__${buttonColor}`}>
      {props.title === "Cart" && (
        <span className="icon">
          <CartIcon />
        </span>
      )}
      {props.title === "Wish List" && (
        <span className="icon">
          <WishIcon />
        </span>
      )}
      <span className="button__title">{props.title}</span>
      {props.quantity && (
        <span className="button__quantity">{props.quantity}</span>
      )}
    </button>
  );
};

export default Button;
