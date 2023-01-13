import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items, ShortCartItem } from "../Models/types";

export type WishInitialState = {
  items: Items[];
  totalQuantity: number;
  isWished: boolean;
  changed: boolean;
};

const initialState: WishInitialState = {
  items: [],
  totalQuantity: 0,
  isWished: false,
  changed: false, // We already discussed that you don't need this
};

const wishListSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    toggleIsWish(state) {
      state.isWished = !state.isWished;
    },
    replaceWishList(state, action: PayloadAction<ShortCartItem>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToWishList(state, action: PayloadAction<Items>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity++; // I think you know but you are only free for doing this ++ because you are using Redux and uses anothe module that allows you doing this. In every other case, avoid mutate your variables, we need always copy their values and create a new reference. You are still changing your variables, and you should, like I said to do, but in the right way. 
        state.items.push({ // Like this, you are doing this push here just beacuse you are inside Redux reducer, if not, always create new references, in that case for example, [...itens, newItem] 
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
          isWished: newItem.isWished,
        });
        state.changed = true;
      }
    },
    removeFromWishList(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem: any = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.isWished = false;
        state.items = state.items.filter((item) => item.id !== id); // I can see that you know how to use array methods. That is awesome, try to not use Lodash or jQuery, if current javascript we don't need those libraries anymore.
      }
      state.changed = true;
    },

    clearWishList(state) {
      state.totalQuantity = 0;
      state.changed = true;
      state.items = [];
    },
  },
});

export const wishActions = wishListSlice.actions;

export default wishListSlice;
