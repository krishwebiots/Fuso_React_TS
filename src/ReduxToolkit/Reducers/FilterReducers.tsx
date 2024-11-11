import { createSlice } from "@reduxjs/toolkit";

interface FilterSliceType {
  propertyType: string[];
  bedsRooms: string[];
  amenities: string[];
  squareFeetStatus: { min: number; max: number };
}

const initialState: FilterSliceType = {
  propertyType: ["villa"],
  bedsRooms: [],
  amenities: [],
  squareFeetStatus: { min: 400, max: 4000 },
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
  },
});

export const { setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus } = FilterSlice.actions;
export default FilterSlice.reducer;
