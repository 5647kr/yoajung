import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/event";

// 컴포넌트에서 호출할 액션 함수
export const eventList = reduxHelper.get("EventSlice/eventList", API_URL);

// 슬라이스 생성 --> 액션함수 목록을 배열로 넘겨야 함
const EventSlice = reduxHelper.getDefaultSlice("EventSlice", [
  eventList,
]);

// 리듀서 내보내기
export default EventSlice.reducer;
