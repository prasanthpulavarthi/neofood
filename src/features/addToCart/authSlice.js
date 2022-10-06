import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem("userData")
? JSON.parse(localStorage.getItem("userData"))
: null;

const initialAuthState = {
  token: userData,
  isLoggedIn: !!userData,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("userData", JSON.stringify(state.token));
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userData");
      // localStorage.removeItem("cartItems");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
