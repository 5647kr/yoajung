import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/footer";

export const getFooter = reduxHelper.get("FooterSlice/getFooter", API_URL);

const FooterSlice = reduxHelper.getDefaultSlice("FooterSlice", [getFooter]);

export default FooterSlice.reducer;
