import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import sidebarReducer from "../features/sidebarSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
