import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import goodSlice from "./goods";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    goods: goodSlice.reducer
  }
});

export default store;

// {type:"user-slice/setGender",payload:"女"}
