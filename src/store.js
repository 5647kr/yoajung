import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./slices/MenuSlice";
import FooterSlice from "./slices/FooterSlice";
import MainSlice from "./slices/MainSlice";
import FaqSlice from "./slices/FaqSlice";
import EventSlice from "./slices/EventSlice";

const store = configureStore({
  reducer: {
    MenuSlice,
    FooterSlice,
    MainSlice,
    FaqSlice,
    EventSlice
  },
});

export default store;
