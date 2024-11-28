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
  budgetStatus: [40000, 300000],
  carCategories: "",
  carFuelType: [],
  carModalYear: null,
  carSeats: [],
  carColor: [],
  carTransmission: [],
  carOwner: [],
  carKilometers: [10000, 30000],
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
    setMinAndMaxPrice: (state, action) => {
      action.payload ? (state.minAndMaxPrice = [...action.payload]) : state.minAndMaxPrice.splice(0, state.minAndMaxPrice.length);
    },
    setBudgetStatus: (state, action) => {
      action.payload ? (state.budgetStatus = [...action.payload]) : state.budgetStatus.splice(0, state.budgetStatus.length);
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
      action.payload ? (state.carKilometers = [...action.payload]) : state.carKilometers.splice(0, state.carKilometers.length);
    },
    setMinAndMaxKilometers: (state, action) => {
      action.payload ? (state.minAndMaxKilometers = [...action.payload]) : state.minAndMaxKilometers.splice(0, state.minAndMaxKilometers.length);
    },
  },
});

export const { setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus, setyearBuiltStatus, setPriceStatus, setSortBy, setPopular, setCarBrandModel, setBudgetStatus, setCarCategories, setCarFuelType, setCarModalYear, setCarSeats, setCarColor, setCarTransmission, setCarOwner, setCarKilometers, setMinAndMaxPrice, setMinAndMaxKilometers } = FilterSlice.actions;
export default FilterSlice.reducer;
