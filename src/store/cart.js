import { createSlice } from "@reduxjs/toolkit";
const intialCartState = { cartItem: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    addProductInCart(state, action) {
        console.log(action)
      const CopiedState = state.cartItem;

      const findProduct = state.cartItem.findIndex((current) => {
        return (
          current.userId == action.payload.userId &&
          current.productId == action.payload.productId
        );
      });
      if (findProduct!=-1) {
        const existingItem = CopiedState[findProduct];
        console.log(existingItem);
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        CopiedState[findProduct] = updatedItem;
        state.cartItem = CopiedState;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
    },
  },
});
const cartSliceReducer = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
export default cartSliceReducer;
