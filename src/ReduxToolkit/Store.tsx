import { configureStore } from "@reduxjs/toolkit";
import LayoutReducers from "./Reducers/LayoutReducers";
import ProductReducers from "./Reducers/ProductReducers";
import FilterSlice from "./Reducers/FilterReducers";

export const store = configureStore({
  reducer: {
    layout: LayoutReducers,
    product: ProductReducers,
    filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
