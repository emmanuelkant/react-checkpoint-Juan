import { useAppSelector, useAppDispatch } from "./components/Hooks/redux-hooks";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Notification from "./components/UI/Notification";
import ProductsList from "./components/Shop/ProductsList";
import { useEffect } from "react";
import { getCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.ui.showCart);
  //CHANGE TYPES!
  const cart: any = useAppSelector((state) => state.cart);

  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      {showCart && <Cart />}
      <ProductsList />
    </>
  );
};

export default App;
