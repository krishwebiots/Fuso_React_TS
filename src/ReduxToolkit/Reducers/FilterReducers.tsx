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
  jobCategories: [],
  jobSalary: [25, 60],
  minAndMaxSalary: [],
  jobWorkMode: "",
  jobCompanyType: [],
  jobEducation: [],
  jobBy: [],
  jonLocation: [],
  jobTopCompanies: [],
  jobType: [],
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
    setJobCategories: (state, action) => {
      state.jobCategories = action.payload;
    },
    setJobSalary: (state, action) => {
      state.jobSalary = action.payload;
    },
    setMinAndMaxSalary: (state, action) => {
      state.minAndMaxSalary = action.payload;
    },
    setJobWorkMode: (state, action) => {
      state.jobWorkMode = action.payload;
    },
    setJobCompanyType: (state, action) => {
      state.jobCompanyType = action.payload;
    },
    setJobEducation: (state, action) => {
      state.jobEducation = action.payload;
    },
    setJobBy: (state, action) => {
      state.jobBy = action.payload;
    },
    setJonLocation: (state, action) => {
      state.jonLocation = action.payload;
    },
    setJobTopCompanies: (state, action) => {
      state.jobTopCompanies = action.payload;
    },
    setJobType: (state, action) => {
      state.jobType = action.payload;
    },
    removeFilter: (state: any, action) => {
      const { key, value } = action.payload;
      if (Array.isArray(state[key])) {
        state[key] = state[key].filter((item: any) => item !== value);
      } else if (typeof state[key] === "string" || typeof state[key] === "number") {
        state[key] = "";
      }
    },
    clearAllFilters: (state: any) => {
      Object.keys(state).forEach((key) => {
        if (Array.isArray(state[key])) {
          if (key === "jobSalary") {
            return (state[key] = state.jobSalary);
          }
          if (key === "minAndMaxSalary") {
            return (state[key] = state.minAndMaxSalary);
          }
          state[key] = [];
        } else {
          state[key] = "";
        }
      });
    },
  },
});

export const { removeFilter, clearAllFilters, setPropertyType, setBedsRooms, setAmenities, setSquareFeetStatus, setyearBuiltStatus, setPriceStatus, setSortBy, setPopular, setCarBrandModel, setBudgetStatus, setCarCategories, setCarFuelType, setCarModalYear, setCarSeats, setCarColor, setCarTransmission, setCarOwner, setCarKilometers, setMinAndMaxPrice, setMinAndMaxKilometers, setJobCategories, setJobSalary, setMinAndMaxSalary, setJobWorkMode, setJobCompanyType, setJobEducation, setJobBy, setJonLocation, setJobTopCompanies, setJobType } = FilterSlice.actions;
export default FilterSlice.reducer;
