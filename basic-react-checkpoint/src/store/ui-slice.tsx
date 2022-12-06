import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  showCart: boolean;
};

const initialState: InitialState = {
  showCart: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
