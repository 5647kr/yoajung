import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./slices/HeaderSlice";
import NewsListSlice from "./slices/NewsListSlice";
import FooterSlice from "./slices/FooterSlice";

const store = configureStore({
  reducer: {
    HeaderSlice,
    NewsListSlice,
    FooterSlice,
  },
});

export default store;
