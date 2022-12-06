import React from "react";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <header>
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
