import wishSlice from "../slices/wishSlice";
import cartSlice from "../slices/cartSlice";
import userSlice from '../slices/userSlice';

import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    wish: wishSlice,
  },
});

export default store;