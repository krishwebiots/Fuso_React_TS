import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  openFilterSidebar: false,
  cardToShow: 6,
  totalProduct: 0,
  searchModal: false,
  mapModal: false,
  shareModal: false,
  videoModal: false,
  reviewModal: false,
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
    setShareModal: (state) => {
      state.shareModal = !state.shareModal;
    },
    setVideoModal: (state) => {
      state.videoModal = !state.videoModal;
    },
    setReviewModal: (state) => {
      state.reviewModal = !state.reviewModal;
    },
  },
});

export const { setSidebarOpen, setOpenFilterSidebar, setCardToShow, setTotalProduct, setSearchModal, setMapModal, setShareModal, setVideoModal, setReviewModal } = SidebarSlice.actions;
export default SidebarSlice.reducer;
