import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { token: null, isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.token = action.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
