import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  openFilterSidebar: false,
  cardToShow: 6,
  totalProduct: 0,
  searchModal: false,
  mapModal: false,
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
    setSearchModal: (state) => {
      state.searchModal = !state.searchModal;
    },
    setMapModal: (state) => {
      state.mapModal = !state.mapModal;
    },
  },
});

export const { setSidebarOpen, setOpenFilterSidebar, setCardToShow, setTotalProduct, setSearchModal, setMapModal } = SidebarSlice.actions;
export default SidebarSlice.reducer;
