import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      title: "Test",
      description: "This is a first product - amazing!",
      price: 6
    },
    {
      title: "My second book",
      description: "My second book was a best seller!",
      price: 100
    }
  ]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    }
  }
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
