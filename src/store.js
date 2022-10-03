import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/addToCart/authSlice";

import cartReducer from "./features/addToCart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
