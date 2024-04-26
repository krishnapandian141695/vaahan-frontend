import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LgoinState {
  userInfo: any;
  loginDetails: any;
}

const initialState: LgoinState = {
  userInfo: null,
  loginDetails: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction) => {
      console.log(action.payload, "action.payload34");
      state.userInfo = action.payload;
    },
    currenUserInfo: (state, action: PayloadAction) => {
      state.loginDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, currenUserInfo } = loginSlice.actions;

export default loginSlice.reducer;
