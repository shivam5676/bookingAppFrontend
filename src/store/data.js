import { createSlice } from "@reduxjs/toolkit";
const initialState = {products:[]};
const dataSlice = createSlice({
  name: "dataManager",
  initialState: initialState,
  reducers: {
    addproduct: (state, action) => {
      const productsArray=action.payload
      console.log(productsArray)
      state.products=productsArray
    },
  },
});
const dataSliceReducer = dataSlice.reducer;
export const dataSliceActions = dataSlice.actions;
export default dataSliceReducer;
