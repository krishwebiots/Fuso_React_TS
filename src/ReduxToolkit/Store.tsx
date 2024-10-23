import { configureStore } from "@reduxjs/toolkit";
import LayoutReducers from "./Reducers/Layout/LayoutReducers";

export const store = configureStore({
  reducer: {
    layout: LayoutReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
