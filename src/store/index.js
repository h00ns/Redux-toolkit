import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./modules/data";
import { userSlice } from "./modules/user"

// reducer 결합
const rootReducer = combineReducers({
  data: dataSlice.reducer,
  user: userSlice.reducer
});

// store 생성
const store = configureStore({ reducer: rootReducer })

export default store;