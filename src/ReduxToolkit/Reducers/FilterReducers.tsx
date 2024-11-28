import { createSlice } from "@reduxjs/toolkit";
import { FilterSliceType } from "../../Types/ProductType";

const initialState: FilterSliceType = {
  propertyType: [],
  bedsRooms: [],
  amenities: [],
  priceStatus: [40000, 500000],
  squareFeetStatus: [400, 4000],
  yearBuiltStatus: [2019, 2024],
  sortBy: null,
  popular: null,
  carBrandModel: [],
  budgetStatus: [40000, 300000],
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    setBedsRooms: (state, action) => {
      state.bedsRooms = action.payload;
    },
    setAmenities: (state, action) => {
      state.amenities = action.payload;
    },
    setSquareFeetStatus: (state, action) => {
      action.payload ? (state.squareFeetStatus = [...action.payload]) : state.squareFeetStatus.splice(0, state.squareFeetStatus.length);
    },
    setyearBuiltStatus: (state, action) => {
      action.payload ? (state.yearBuiltStatus = [...action.payload]) : state.yearBuiltStatus.splice(0, state.yearBuiltStatus.length);
    },
    setPriceStatus: (state, action) => {
      action.payload ? (state.priceStatus = [...action.payload]) : state.priceStatus.splice(0, state.priceStatus.length);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setCarBrandModel: (state, action) => {
      state.carBrandModel = action.payload;
    },
    setBudgetStatus: (state, action) => {
      action.payload ? (state.budgetStatus = [...action.payload]) : state.budgetStatus.splice(0, state.budgetStatus.length);
    },
  },
});

export const { setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus, setyearBuiltStatus, setPriceStatus, setSortBy, setPopular, setCarBrandModel, setBudgetStatus } = FilterSlice.actions;
export default FilterSlice.reducer;
