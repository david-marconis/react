import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const id = action.payload;
      state.items[id] = state.items[id] ? state.items[id] + 1 : 1;
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items[id]--;
      if (state.items[id] <= 0) {
        delete state.items[id];
      }
    },

    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
