import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  hasChanged: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const id = action.payload;
      state.items[id] = state.items[id] ? state.items[id] + 1 : 1;
      state.hasChanged = true;
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items[id]--;
      if (state.items[id] <= 0) {
        delete state.items[id];
      }
      state.hasChanged = true;
    },

    setCart(state, action) {
      state.items = action.payload;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
