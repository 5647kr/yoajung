/**
 * 메뉴 데이터를 백엔드로부터 받아오는 슬라이스
 */
import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/header";

// 컴포넌트에서 호출할 액션 함수
export const getMenu = reduxHelper.get("HeaderSlice/getMenu", API_URL);

// 슬라이스 생성 --> 액션함수 목록을 배열로 넘겨야 함
const HeaderSlice = reduxHelper.getDefaultSlice("HeaderSlice", [getMenu]);

// 리듀서 내보내기
export default HeaderSlice.reducer;