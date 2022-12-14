import CartButton from "./CartButton";
import WishListButton from "./WishListButton";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">React Shop</h1>
      <nav className="header__nav">
        <ul className="header__ul">
          <li>
            <CartButton />
          </li>
          <li>
            <WishListButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
