import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../UserAPI";
import LocalStorageKey from "../../constant_keys/LocalStorageKey";

export const login = createAsyncThunk(
  "user/login",
  async (payload) => {
    console.log(payload)
    const responeData = await UserApi.login(payload);
    const jwt = responeData.headers.authorization;
    const newJwt = jwt.replace("Bearer ", "");
    localStorage.setItem(LocalStorageKey.TOKEN, newJwt);
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