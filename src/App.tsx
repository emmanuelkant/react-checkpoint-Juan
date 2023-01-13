import { useAppSelector, useAppDispatch } from "./components/Hooks/redux-hooks";
import "./sass/main.scss";
import Header from "./components/Layout/Header";
import Notification from "./components/UI/Notification";
import ProductsList from "./components/Shop/ProductsList";
import Popup from "./components/UI/Popup";
import { useEffect } from "react";
import { getCartData, sendCartData } from "./store/cart-actions";
import { getWishListData, sendWishListData } from "./store/wishList-actions";
import { uiActions } from "./store/ui-slice";

let isCartInitial = true; // You are using React so let's use React features. It could be a local state inside your component
let isWishInitial = true; // The same as above here

const App = () => {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.ui.showCart);
  const showWishList = useAppSelector((state) => state.ui.showWishList);
  const cart: any = useAppSelector((state) => state.cart);
  const wishList: any = useAppSelector((state) => state.wish);

  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
    dispatch(getWishListData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]); // Sometimes the React is wrong haha. Here you should use a empty array and force to React not complaing about dependencies since you really want that be called just in the first render. You can put the comment line above and let the dependency array empty

  useEffect(() => {
    if (isCartInitial) {
      isCartInitial = false; // You are using React so let's use React features. It could be a local state
      return; // Try to avoid use empty returns inside the useEffect. Use it just for cleanup something. In this case I will recommend you to use a reverse if, just do something if !isCartInitial
    }

    if (cart.changed) { // You don't need this "changed" property. Every time that the cart change, the "cart" state will change and the redux automatically will trigger the rerender in this component since it uses that part of the state. Variables are made to change their values, if you pay attention you will notice that you start with this "changed" variable with false and in all others changes you change it to "true" so basically it is always true.
      dispatch(sendCartData(cart));
      const timer = setTimeout(() => { // Try to avoid the setTimeout, this cost a lot for your application, try use CSS classes and "transition-delay" property or even create an animation with key frames for it your performance will be improved A LOT.
        dispatch(uiActions.clearNotification());
      }, 2000);

      return () => { // Well done in cleanup the useEffects, never forget about it when it is necessary
        clearTimeout(timer);
      };
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (isWishInitial) {
      isWishInitial = false; // The same here. It is better use state
      return; // The same here, it is better avoid it.
    }

    if (wishList.changed) { // The Same here, you don't need it.
      dispatch(sendWishListData(wishList));
      const timer = setTimeout(() => { // Again, it is not wrong in use it, sometimes that will be your only option, but every time that you could not use it, do not use it.
        dispatch(uiActions.clearNotification()); // Still about setTimeout. You can continuing changing the state but you could add something in you notification component that just add or remove a class for example.
      }, 2000);

      return () => { // Good!
        clearTimeout(timer);
      };
    }
  }, [wishList, dispatch]);

  return (
    <>
      <Header />
      {notification && (
        <section className="notification-section">{/* Good use of section, HTML5 there are a lot of good tags that we simply don't use it */}
          <Notification
            status={notification.status} // TIP: This is not wrong but if you needed to pass props more than two levels down deep, so problably is better don't pass the data as props and get the data inside the component with "useSelector" instead. I don't know if you have already heard about "Hell Props in React", if not, google it. This is a very well known "problem" of React that we are always trying to reduce. 
            title={notification.title}
            message={notification.message}
          />
        </section>
      )}
      {showCart && <Popup />}
      {showWishList && <Popup />}
      <ProductsList wishList={wishList} />
    </>
  );
};

export default App;
