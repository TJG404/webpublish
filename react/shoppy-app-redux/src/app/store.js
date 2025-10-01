import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from '../feature/cart/cartSlice.js'
import productSlice  from '../feature/product/productSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice
  },
})