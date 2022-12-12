import React from "react";
import CartButton from "../Cart/CartButton";
import WishListButton from "../WishList/WishListButton";

const Header = () => {
  return (
    <header>
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
            <WishListButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
