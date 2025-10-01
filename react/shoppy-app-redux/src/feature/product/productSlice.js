import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],  //출력용 - 2차원 배열
  products: []  //원본 - 1차원 배열
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createProduct(state, action) {
        const { productList, products } = action.payload;
        state.productList = productList;
        state.products = products;
    }
  },
})

export const {  createProduct
             } = productSlice.actions   //API 함수 또는 컴포넌트에서 dispatch(액션함수)

export default productSlice.reducer  //store  import