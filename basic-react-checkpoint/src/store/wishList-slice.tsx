import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items, ShortCartItem } from "../Models/types";

export type WishInitialState = {
  items: Items[];
  totalQuantity: number;
  isWish: boolean;
  changed: boolean;
};

const initialState: WishInitialState = {
  items: [],
  totalQuantity: 0,
  isWish: false,
  changed: false,
};

const wishListSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    toggleWish(state) {
      state.isWish = !state.isWish;
    },
    replaceWishList(state, action: PayloadAction<ShortCartItem>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToWishList(state, action: PayloadAction<Items>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push(newItem);
      } else {
        return;
      }
    },
    removeFromWishList(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem: any = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      state.isWish = false;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = 0;
      }
    },

    clearWishList(state) {
      return (state = initialState);
    },
  },
});

export const wishActions = wishListSlice.actions;

export default wishListSlice;
