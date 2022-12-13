import { useAppSelector, useAppDispatch } from "./components/Hooks/redux-hooks";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Notification from "./components/UI/Notification";
import ProductsList from "./components/Shop/ProductsList";
import { useEffect } from "react";
import { getCartData, sendCartData } from "./store/cart-actions";
import WishList from "./components/WishList/WishList";
import { getWishListData, sendWishListData } from "./store/wishList-actions";

let isCartInitial = true;
let isWishInitial = true;

const App = () => {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.ui.showCart);
  const showWishList = useAppSelector((state) => state.ui.showWishList);
  //CHANGE TYPES!
  const cart: any = useAppSelector((state) => state.cart);
  const wishList: any = useAppSelector((state) => state.wish);

  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
    dispatch(getWishListData());
  }, [dispatch]);

  useEffect(() => {
    if (isCartInitial) {
      isCartInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (isWishInitial) {
      isWishInitial = false;
      return;
    }

    if (wishList.changed) {
      dispatch(sendWishListData(wishList));
    }
  }, [wishList, dispatch]);

  console.log(showCart);
  console.log(showWishList);

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
      {showWishList && <WishList />}
      <ProductsList wishList={wishList} />
    </>
  );
};

export default App;
