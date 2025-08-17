import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./slices/MenuSlice";
import FooterSlice from "./slices/FooterSlice";

const store = configureStore({
  reducer: {
    MenuSlice,
    FooterSlice
  },
});

export default store;
