import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";

//List of reducer in app
const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;