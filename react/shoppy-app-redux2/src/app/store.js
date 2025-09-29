import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
  // 필요 시: middleware: (getDefault) => getDefault().concat(logger)
})