import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store:any = configureStore({
  reducer: {
    counter: counterReducer, // key = slice name in state, value = reducer fn
  },
  // middleware, devTools and other options are configured for you by RTK
});
