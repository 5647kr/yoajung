/**
 * /src/helpers/ReduxHelper.js
 *
 * ReduxSlice를 작업하면서 반복되는 중복코드의 모듈화
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchHelper from "./FetchHelper";

// 기본 상태 객체
const DEFAULT_INITIAL_STATE = {
  status: 200, // HTTP 상태 코드 (200: 성공, 500: 실패 등)
  data: null, // 서버로부터 받은 데이터
  loading: false, // 로딩 상태 (true: 로딩 중, false: 로딩 완료)
};

// 리덕스가 로딩 상태를 관리하는 상태값을 생성하는 함수 -> 백엔드 접속 전
const pending = (state) => {
  state.status = 200;
  state.loading = true;
};

// 리덕스가 성공 상태를 관리하는 상태값을 생성하는 함수
const fulfilled = (state, { payload }) => {
  state.loading = false;
  state.status = 200;
  state.data = payload; // 서버로부터 받은 데이터를 상태에 저장
};

// 리덕스가 실패 상태를 관리하는 상태값을 생성하는 함수
const rejected = (state, { payload }) => {
  state.loading = false;
  state.status = 500;
};

const reduxHelper = {
  // 리덕스 Slice 객체를 생성하는 함수
  // 1) sliceName: slice 객체의 이름
  // 2) extraReducers: 비동기 처리를 위한 액션함수 배열
  // 3) callback : 비동기 처리 성공시 호출할 콜백함수. 없다면 기본 fulfilled 함수 호출
  getDefaultSlice: (
    slideName,
    extraReducers = [],
    callback = {},
    reducers = {}
  ) => {
    return createSlice({
      name: slideName,
      initialState: structuredClone(DEFAULT_INITIAL_STATE),
      reducers: reducers,
      extraReducers: (builder) => {
        extraReducers.forEach((v, i) => {
          builder.addCase(v.pending, pending);
          builder.addCase(v.fulfilled, callback[v.fulfilled] || fulfilled);
          builder.addCase(v.rejected, rejected);
        });
      },
    });
  },

  get: (
    alias,
    url,
    callback = (payload) => {
      return { url: url, params: payload };
    }
  ) => {
    return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
      let result = null;
      const { url, params } = callback(payload);

      try {
        result = await fetchHelper.get(url, params);
      } catch (err) {
        console.group("[ReduxHelper.get] Redux Action Error");
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err);
      }

      return result;
    });
  },

  post: (
    alias,
    url,
    callback = (payload) => {
      return { url: url, params: payload };
    }
  ) => {
    return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
      let result = null;
      const { url, params } = callback(payload);

      try {
        result = await fetchHelper.post(url, params);
      } catch (err) {
        console.group("[ReduxHelper.post] Redux Action Error");
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err);
      }

      return result;
    });
  },

  put: (
    alias,
    url,
    callback = (payload) => {
      return { url: url, params: payload };
    }
  ) => {
    return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
      let result = null;
      const { url, params } = callback(payload);

      try {
        result = await fetchHelper.put(url, params);
      } catch (err) {
        console.group("[ReduxHelper.put] Redux Action Error");
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err);
      }

      return result;
    });
  },

  delete: (
    alias,
    url,
    callback = (payload) => {
      return { url: url, params: payload };
    }
  ) => {
    return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
      let result = null;
      const { url, params } = callback(payload);

      try {
        result = await fetchHelper.delete(url, params);
      } catch (err) {
        console.group("[ReduxHelper.delete] Redux Action Error");
        console.error(err);
        console.groupEnd();
        result = rejectWithValue(err);
      }

      return result;
    });
  },
};

export default reduxHelper;
