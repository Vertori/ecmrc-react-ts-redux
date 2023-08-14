import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import sidebarReducer from "../features/sidebarSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
