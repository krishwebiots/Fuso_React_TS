import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setCartData: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setCartData } = LayoutSlice.actions;
export default LayoutSlice.reducer;
