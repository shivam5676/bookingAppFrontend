import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./data";
import cartSliceReducer from "./cart";
import loginSliceReducer from "./login";

const store=configureStore({reducer:{data:dataSliceReducer,cart:cartSliceReducer,login:loginSliceReducer}})
export default store;