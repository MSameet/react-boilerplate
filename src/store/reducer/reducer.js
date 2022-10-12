import { createSlice } from "@reduxjs/toolkit";

const responsiveReducerSlice = createSlice({
  name: "responsiveReducerSlice",
  initialState: {
    screenWidth: window.innerWidth,
  },
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});
export const { setScreenWidth } = responsiveReducerSlice.actions;
export const responsiveReducer = responsiveReducerSlice.reducer;
