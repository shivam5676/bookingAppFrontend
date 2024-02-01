import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./data";
import cartSliceReducer from "./cart";

const store=configureStore({reducer:{data:dataSliceReducer,cart:cartSliceReducer}})
export default store;