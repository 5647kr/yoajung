import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./slices/HeaderSlice";
import FooterSlice from "./slices/FooterSlice";

const store = configureStore({
  reducer: {
    HeaderSlice,
    FooterSlice,
  },
});

export default store;
