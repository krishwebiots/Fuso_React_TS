import { configureStore } from "@reduxjs/toolkit";
import LayoutReducers from "./Reducers/Layout/LayoutReducers";
import ProductReducers from "./Reducers/ProductReducers";

export const store = configureStore({
  reducer: {
    layout: LayoutReducers,
    product: ProductReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
