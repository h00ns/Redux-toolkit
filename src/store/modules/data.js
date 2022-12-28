import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apis/client"

// (thunk name, async function) 비동기 작업
export const asyncFetch = createAsyncThunk('data/asyncFetch', async () => {
  const { data } = await api.get(`${process.env.REACT_APP_API_URL}`)
  return data
})

export const dataSlice = createSlice({
  // slice 이름
  name: 'dataState',
  // 초기 값
  initialState: {
    value: {},
    loading: false,
    error: null
  },
  // 리듀서
  reducers: {},
  /**
   * extraReducers
   * 외부에서 만들어진 action을 통해 현재 slice에서 사용하는
   * initialState에 변경을 가하는 경우 처리받는 reducer
   * (비동기 작업 함수 처리 등에 사용됨)
   */
  extraReducers: (builder) => {
    // 통신 중
    builder.addCase(asyncFetch.pending, (state, action) => {
      state.loading = true;
      console.log('pending');
    })
    // 통신 성공
    builder.addCase(asyncFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload.datas;
      console.log('success');
    })
    // 통신 실패
    builder.addCase(asyncFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log('reject');
    })
  }
})
