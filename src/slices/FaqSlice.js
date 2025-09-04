import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/faq";

// 컴포넌트에서 호출할 액션 함수
export const faqList = reduxHelper.get("FaqSlice/faqList", API_URL);

// 슬라이스 생성 --> 액션함수 목록을 배열로 넘겨야 함
const FaqSlice = reduxHelper.getDefaultSlice("FaqSlice", [
  faqList,
]);

// 리듀서 내보내기
export default FaqSlice.reducer;
