import { createSlice } from "@reduxjs/toolkit";
import { FilterSliceType } from "../../Types/ProductType";

const initialState: FilterSliceType = {
  propertyType: [],
  bedsRooms: [],
  amenities: [],
  squareFeetStatus: { min: 400, max: 4000 },
  yserBuiltStatus: { min: 2019, max: 2024 },
  priceStatus: { min: 1000, max: 1000000 },
  sortBy: null,
  popular: null,
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
      state.squareFeetStatus = { min: action.payload[0] || action.payload.min, max: action.payload[1] || action.payload.max };
    },
    setYserBuiltStatus: (state, action) => {
      state.yserBuiltStatus = { min: action.payload[0] || action.payload.min, max: action.payload[1] || action.payload.max };
    },
    setPriceStatus: (state, action) => {
      state.priceStatus = { min: action.payload[0] || action.payload.min, max: action.payload[1] || action.payload.max };
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus, setYserBuiltStatus, setPriceStatus, setSortBy, setPopular } = FilterSlice.actions;
export default FilterSlice.reducer;
