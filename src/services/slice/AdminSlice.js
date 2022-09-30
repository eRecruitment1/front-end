import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminApi from "../adminApi";
import StorageKey from "../../constant_keys/LocalStorageKey";


export const login = createAsyncThunk(
  "admin/login",
  async (payload) => {
    const responeData = await adminApi.login(payload);
    const jwt = responeData.headers.authorization;
    const newJwt = jwt.replace("Bearer ", "");
    localStorage.setItem(StorageKey.TOKEN, newJwt);
    localStorage.setItem(StorageKey.ADMIN, JSON.stringify(responeData.data));
    return responeData;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKey.ADMIN)) || {},
    accessToken: localStorage.getItem(StorageKey.ADMIN) || {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKey.ADMIN);
      localStorage.removeItem(StorageKey.TOKEN);

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

const { actions, reducer } = adminSlice;
export const { logout } = actions;
export default reducer;
