import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // slice 이름
  name: 'userState',
  // 초기 값
  initialState: {
    id: '',
    name: ''
  },
  // 리듀서
  reducers: {
    // ts. action: PayloadAction<T>
    handleUserUpdate: (state, action) => {
      return { ...action.payload };
    }
  }
})

export const { handleUserUpdate } = userSlice.actions