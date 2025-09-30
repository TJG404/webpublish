import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from '../feature/cart/cartSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})