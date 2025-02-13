import { createSlice } from "@reduxjs/toolkit";
import { Sections } from "../../Data/Property";

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
  signUpModal: false,
  scrollActive: Sections[0].id,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
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
    setSignUpModal: (state) => {
      state.signUpModal = !state.signUpModal;
    },
    setScrollActive: (state, action) => {
      state.scrollActive = action.payload;
    },
  },
});

export const { setScrollActive, setLoginModal, setSignUpModal, setDashboardSidebar, setLogoutModal, setAddressModal, setPersonalModal, setMoreDetailsModal, setSidebarOpen, setOpenFilterSidebar, setCardToShow, setTotalProduct, setSearchModal, setMapModal, setShareModal, setVideoModal, setReviewModal, setOfferModal, setDriverModal, setActiveTab } = LayoutSlice.actions;
export default LayoutSlice.reducer;
