import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../services/UserAPI";
import LocalStorageKey from "../../constant/LocalStorageKey";

export const login = createAsyncThunk(
  "/login",
  async (payload) => {
    const responeData = await UserApi.login(payload);
    const jwt = responeData.data.token;
    localStorage.setItem(LocalStorageKey.TOKEN, jwt);
    localStorage.setItem(LocalStorageKey.USER, JSON.stringify(responeData.data));
    return responeData;
  }
);

export const googleLogin = createAsyncThunk(
  "/googlegLogin",
  async (payload) => {
    const responeData = await UserApi.googleLogin(payload);
    const jwt = responeData.data.token;
    localStorage.setItem(LocalStorageKey.TOKEN, jwt);
    localStorage.setItem(LocalStorageKey.USER, JSON.stringify(responeData.data));
    return responeData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(LocalStorageKey.USER)) || {},
    accessToken: localStorage.getItem(LocalStorageKey.TOKEN) || {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(LocalStorageKey.USER);
      localStorage.removeItem(LocalStorageKey.TOKEN);

      state.current = {};
      state.accessToken = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const jwt = action.payload.data.token;
      state.current = action.payload.data;
      state.accessToken = jwt;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;