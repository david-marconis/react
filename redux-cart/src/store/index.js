import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import products from "./products";
import uiSlice from "./ui";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cart.reducer,
    products: products.reducer
  }
});

export default store;
