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
  offerModal: false,
  driverModal: false,
  activeTab: "dashboard",
  moreDetailsModal: false,
  personalModal: false,
  addressModal: false,
  logoutModal: false,
  dashboardSidebar: false,
  loginModal: true,
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
    setOfferModal: (state) => {
      state.offerModal = !state.offerModal;
    },
    setDriverModal: (state) => {
      state.driverModal = !state.driverModal;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setMoreDetailsModal: (state) => {
      state.moreDetailsModal = !state.moreDetailsModal;
    },
    setPersonalModal: (state) => {
      state.personalModal = !state.personalModal;
    },
    setAddressModal: (state) => {
      state.addressModal = !state.addressModal;
    },
    setLogoutModal: (state) => {
      state.logoutModal = !state.logoutModal;
    },
    setDashboardSidebar: (state) => {
      state.dashboardSidebar = !state.dashboardSidebar;
    },
    setLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
});

export const { setLoginModal, setDashboardSidebar, setLogoutModal, setAddressModal, setPersonalModal, setMoreDetailsModal, setSidebarOpen, setOpenFilterSidebar, setCardToShow, setTotalProduct, setSearchModal, setMapModal, setShareModal, setVideoModal, setReviewModal, setOfferModal, setDriverModal, setActiveTab } = SidebarSlice.actions;
export default SidebarSlice.reducer;
