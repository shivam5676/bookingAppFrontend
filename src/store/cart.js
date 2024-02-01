import { createSlice } from "@reduxjs/toolkit";
const intialCartState=[]
const cartSlice=createSlice({
    name:"cart",
    initialState:intialCartState,
    reducers:{
        addProductInCart(state,action){
            console.log(action)
        }
    }
})
const cartSliceReducer=cartSlice.reducer;
export const cartSliceActions=cartSlice.actions;
export default  cartSliceReducer