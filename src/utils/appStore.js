import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// this is the store

const appStore= configureStore({
    reducer: {
      user: userReducer
    },
});

export default appStore;