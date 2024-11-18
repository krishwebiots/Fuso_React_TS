import { configureStore } from "@reduxjs/toolkit";
import SidebarReducers from "./Reducers/SidebarReducers";
import ProductReducers from "./Reducers/ProductReducers";
import FilterSlice from "./Reducers/FilterReducers";

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducers,
    product: ProductReducers,
    filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
