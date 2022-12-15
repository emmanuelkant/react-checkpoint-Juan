import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
import { CartItems, Items } from "../Models/types";
import { CART_URL } from "../Models/config";
import axios from "axios";

export const getCartData = () => {
  //CHANGE TYPES! and add a const for url... (maybe CartItems type?)
  return async (dispatch: any) => {
    const getData = async () => {
      const data = await axios.get(CART_URL);

      if (data.statusText !== "OK") {
        throw new Error("Could not fetch cart data!");
      }
      return data;
    };

    try {
      const cartData = await getData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.data.items || [],
          totalQuantity: cartData.data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

//CHANGE TYPES!
export const sendCartData = (cart: CartItems) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await axios.put(CART_URL, {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      });

      if (response.statusText !== "OK") {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      // CHANGE MESSAGES!
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
