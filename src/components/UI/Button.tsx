import React from "react";
import { CartIcon, WishIcon } from "../../assets/IconsSvg";
import { BtnPropsType } from "../../Models/types";

const Button: React.FC<BtnPropsType> = (props) => { // I know that you tried to create this component to reuse it, actually you did it, but I think you could do this diferently. When you create a component that will be reused in many places, this component should be a generic component and your component is not generic, it is more like a silver bullet hahaha. If you need to add "Contact Us" button right now, probably you will need to change this component to fit for the neccessities of your new button and it is totally the opposite of a reusable component should be, at least not soo often. We can discuss this deeply late, but this button component should be just a wrapper for everything and this wrapper should be clickable, should accept custom styles and that is it. 
  const heartIcon = props.quantity === 0 ? "icon-big" : "icon";
  const heartColor =
    props.quantity > 0 ? `${props.classIcon} icon-red` : props.classIcon;
  const cartIcon = props.quantity > 0 ? props.classIcon : "icon-big";

  return (
    <button onClick={props.onClick} className={props.classes}>
      {props.title === "Cart" && (
        <span className={`${cartIcon}  `}>
          <CartIcon />
        </span>
      )}
      {props.title === "Wish List" && (
        <span className={`${heartColor} ${heartIcon}`}>
          <WishIcon />
        </span>
      )}
      {props.title === "Close" && (
        <span className="button__title">{props.title}</span>
      )}
      {props.action === "Add cart" && <span>+</span>}
      {props.quantity > 0 && (
        <span className="button__quantity">{props.quantity}</span>
      )}
    </button>
  );
};

export default Button;
