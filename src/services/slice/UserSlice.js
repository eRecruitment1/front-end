import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "..UserAPI/";

export const login = createAsyncThunk(
  "user/login",
  async (payload) => {
    const responeData = await UserApi.login(payload);
    const jwt = responeData.headers.authorization;
    const newJwt = jwt.replace("Bearer ", "");
    localStorage.setItem(StorageKey.TOKEN, newJwt);
    localStorage.setItem(StorageKey.USER, JSON.stringify(responeData.data));
    return responeData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
    accessToken: localStorage.getItem(StorageKey.TOKEN) || {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKey.USER);
      localStorage.removeItem(StorageKey.TOKEN);

      state.current = {};
      state.accessToken = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload.data;
    },
    [login.fulfilled]: (state, action) => {
      const jwt = action.payload.headers.authorization;
      const newJwt = jwt.replace("Bearer ", "");
      state.current = action.payload.data;
      state.accessToken = newJwt;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;