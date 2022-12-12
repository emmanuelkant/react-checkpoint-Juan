import { WishItems } from "../Models/types";
import { wishActions } from "./wishList-slice";
import { uiActions } from "./ui-slice";

// export const getPlpData = () => {
//   //CHANGE TYPES! and add a const for url... (maybe CartItems type?)
//   return async (dispatch: any) => {
//     const getData = async () => {
//       const response = await fetch("https://fakestoreapi.com/products?limit=6");

//       if (!response.ok) {
//         throw new Error("Could not fetch cart data!");
//       }

//       const data = await response.json();
//       return data;
//     };

//     try {
//       const responseData = await getData();
//       const productsList: Items[] = [];

//       for (const key in responseData) {
//         productsList.push({
//           id: key,
//           title: responseData[key].title,
//           image: responseData[key].image,
//           price: responseData[key].price,
//           quantity: 0,
//           totalPrice: 0,
//           isWish: responseData[key].isWish,
//         });
//       }
//       return productsList;
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Fetching Products data failed",
//         })
//       );
//     }
//   };
// };

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
        message: "Sending cart data",
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
