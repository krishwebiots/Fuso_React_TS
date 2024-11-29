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
  minAndMaxPrice: [],
  carBrandModel: [],
  budgetStatus: [50000, 400000],
  carCategories: "",
  carFuelType: [],
  carModalYear: "",
  carSeats: [],
  carColor: [],
  carTransmission: [],
  carOwner: [],
  carKilometers: [10000, 45000],
  minAndMaxKilometers: [],
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
      state.squareFeetStatus = action.payload;
    },
    setyearBuiltStatus: (state, action) => {
      state.yearBuiltStatus = action.payload;
    },
    setPriceStatus: (state, action) => {
      state.priceStatus = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setMinAndMaxPrice: (state, action) => {
      state.minAndMaxPrice = action.payload;
    },
    setCarBrandModel: (state, action) => {
      state.carBrandModel = action.payload;
    },
    setBudgetStatus: (state, action) => {
      state.budgetStatus = action.payload;
    },
    setCarCategories: (state, action) => {
      state.carCategories = action.payload;
    },
    setCarFuelType: (state, action) => {
      state.carFuelType = action.payload;
    },
    setCarModalYear: (state, action) => {
      state.carModalYear = action.payload;
    },
    setCarSeats: (state, action) => {
      state.carSeats = action.payload;
    },
    setCarColor: (state, action) => {
      state.carColor = action.payload;
    },
    setCarTransmission: (state, action) => {
      state.carTransmission = action.payload;
    },
    setCarOwner: (state, action) => {
      state.carOwner = action.payload;
    },
    setCarKilometers: (state, action) => {
      state.carKilometers = action.payload;
    },
    setMinAndMaxKilometers: (state, action) => {
      state.minAndMaxKilometers = action.payload;
    },
  },
});

export const { setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus, setyearBuiltStatus, setPriceStatus, setSortBy, setPopular, setCarBrandModel, setBudgetStatus, setCarCategories, setCarFuelType, setCarModalYear, setCarSeats, setCarColor, setCarTransmission, setCarOwner, setCarKilometers, setMinAndMaxPrice, setMinAndMaxKilometers } = FilterSlice.actions;
export default FilterSlice.reducer;
