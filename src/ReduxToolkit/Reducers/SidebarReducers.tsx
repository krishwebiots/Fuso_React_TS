import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  openFilterSidebar: false,
  cardToShow: 6,
  totalProduct: 0,
};

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setOpenFilterSidebar: (state) => {
      state.openFilterSidebar = !state.openFilterSidebar;
    },
    setCardToShow: (state, action) => {
      state.cardToShow = action.payload;
    },
    setTotalProduct: (state, action) => {
      state.totalProduct = action.payload;
    },
  },
});

export const { setSidebarOpen, setOpenFilterSidebar, setCardToShow, setTotalProduct } = SidebarSlice.actions;
export default SidebarSlice.reducer;
