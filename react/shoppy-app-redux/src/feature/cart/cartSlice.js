import { createSlice } from '@reduxjs/toolkit'
import { cartItemsCheck } from '../../utils/cart.js';

const initialState = {
  cartCount: 0,
  cartList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem (state, action) {
        const { cartItem } = action.payload;
        state.cartList = cartItemsCheck(state.cartList, cartItem); 
        state.cartCount = state.cartCount + 1;   
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCartItem } 
            = cartSlice.actions   //API 함수 또는 컴포넌트에서 dispatch(액션함수)

export default cartSlice.reducer  //store  import