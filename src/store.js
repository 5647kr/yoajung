import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./slices/MenuSlice";
import FooterSlice from "./slices/FooterSlice";
import MainSlice from "./slices/MainSlice";

const store = configureStore({
  reducer: {
    MenuSlice,
    FooterSlice,
    MainSlice
  },
});

export default store;
