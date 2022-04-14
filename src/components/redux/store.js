import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import jobSlice from "./slices/jobSlice";
export const store = configureStore({
  reducer: { userSlice: userSlice, jobSlice: jobSlice },
  devTools: true,
});
