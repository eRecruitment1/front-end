import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../UserAPI";
import LocalStorageKey from "../../constant/LocalStorageKey";

export const login = createAsyncThunk(
  "/login",
  async (payload) => {
    const responeData = await UserApi.login(payload);
    const jwt = responeData.data.token;
    const newJwt = jwt.replace("Bearer ", "");
    
    localStorage.setItem(LocalStorageKey.TOKEN, jwt);
    console.log(jwt)

    localStorage.setItem(LocalStorageKey.USER, JSON.stringify(responeData.data));
    console.log(localStorage.getItem(LocalStorageKey.TOKEN))
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
      console.log(action)
      const jwt = action.payload.data.token;
      state.current = action.payload.data;
      state.accessToken = jwt;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;