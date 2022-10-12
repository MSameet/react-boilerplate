import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { responsiveReducer } from "./reducer/reducer";
export const store = configureStore({
  reducer: {
    responsiveReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
