import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from '../feature/cart/cartSlice.js'
import productSlice  from '../feature/product/productSlice.js'
import authSlice from '../feature/auth/authSlice.js'

//액션 로깅 처리 담당 미들웨어
const myLoggerMiddlware = (store) => (next) => (action) => {
  console.log("dispatch :: ", action);
  const result = next(action);
  console.log("next state :: ", store.getState());  

  return result;
}

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware()
                .concat(myLoggerMiddlware) 
})