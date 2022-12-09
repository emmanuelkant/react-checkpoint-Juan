import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems, Items, ShortCartItem } from "../Models/types";

export type InitialState = {
  items: Items[];
  totalQuantity: number;
  changed: boolean;
};

const initialState: InitialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //CHANGE TYPES!
    replaceCart(state, action: PayloadAction<ShortCartItem>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action: PayloadAction<Items>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity!++;
        existingItem.totalPrice = existingItem.totalPrice! + newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem: any = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    clearCart(state) {
      return (state = initialState);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducers = cartSlice.caseReducers;

export default cartSlice;
