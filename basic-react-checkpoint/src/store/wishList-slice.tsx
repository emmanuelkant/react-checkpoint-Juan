import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems, Items, ShortCartItem } from "../Models/types";
import { cartReducers } from "./cart-slice";

export type WishInitialState = {
  items: Items[];
  totalQuantity: number;
  changed: boolean;
};

const initialState: WishInitialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const wishListSlice = createSlice({
  name: "wish",
  initialState,
  reducers: cartReducers,
});

export const wishActions = wishListSlice.actions;

export default wishListSlice;
