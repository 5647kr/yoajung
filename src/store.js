import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./slices/HeaderSlice";
import FooterSlice from "./slices/FooterSlice";
import MainSlice from "./slices/MainSlice";
import FaqSlice from "./slices/FaqSlice";
import EventSlice from "./slices/EventSlice";

const store = configureStore({
  reducer: {
    HeaderSlice,
    FooterSlice,
    MainSlice,
    FaqSlice,
    EventSlice
  },
});

export default store;
