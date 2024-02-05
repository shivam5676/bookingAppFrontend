import { createSlice } from "@reduxjs/toolkit";
const initialState = { islogin: localStorage.getItem("isLogged") };
const LoginSlice = createSlice({
  name: "Login Manager",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.islogin = true;
    },
    logout: (state, action) => {
      state.islogin = false;
    },
  },
});
const loginSliceReducer=LoginSlice.reducer
export const loginSliceActions=LoginSlice.actions;
export default loginSliceReducer;
