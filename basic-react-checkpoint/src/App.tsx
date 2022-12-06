import { useAppSelector } from "./store/hooks";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import ProductsList from "./components/Shop/ProductsList";

const App = () => {
  const showCart = useAppSelector((state) => state.ui.showCart);

  return (
    <>
      <Header />
      {showCart && <Cart />}
      <ProductsList />
    </>
  );
};

export default App;
