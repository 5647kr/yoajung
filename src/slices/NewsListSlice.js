import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/newsList";

export const getNewsList = reduxHelper.get(
  "NewsListSlice/getNewsList",
  API_URL
);

const NewsListSlice = reduxHelper.getDefaultSlice("NewsListSlice", [
  getNewsList,
]);

export default NewsListSlice.reducer;
