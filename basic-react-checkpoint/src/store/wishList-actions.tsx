import { WishItems } from "../Models/types";
import { wishActions } from "./wishList-slice";
import { uiActions } from "./ui-slice";

export const getWishListData = () => {
  //CHANGE TYPES! and add a const for url... (maybe CartItems type?)
  return async (dispatch: any) => {
    const getData = async () => {
      const response = await fetch(
        "https://shop-cart-162e6-default-rtdb.europe-west1.firebasedatabase.app/wishList.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch wish list data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const wishData = await getData();
      dispatch(
        wishActions.replaceWishList({
          items: wishData.items || [],
          totalQuantity: wishData.totalQuantity,
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
export const sendWishListData = (wish: WishItems) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending wish list data",
      })
    );

    const sendWishRequest = async () => {
      const response = await fetch(
        "https://shop-cart-162e6-default-rtdb.europe-west1.firebasedatabase.app/wishList.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: wish.items,
            totalQuantity: wish.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending wish list data failed.");
      }
    };

    try {
      await sendWishRequest();
      // CHANGE MESSAGES!
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent wish list data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending wish List data failed",
        })
      );
    }
  };
};
