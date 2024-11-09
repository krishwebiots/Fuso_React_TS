import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  propertyType: [],
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPropertyType: (state, action) => {
      const type = action.payload;
      if (state.propertyType.includes(type)) {
        state.propertyType = state.propertyType.filter((item: any) => item !== type);
      } else {
        state.propertyType.push(type);
      }
    },
  },
});

export const { setPropertyType } = FilterSlice.actions;
export default FilterSlice.reducer;
