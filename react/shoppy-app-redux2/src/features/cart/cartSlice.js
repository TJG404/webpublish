import { createSlice } from "@reduxjs/toolkit";
import { cartItemsAddInfo, getTotalPrice,  
         cartItemsCheck } from '../../utils/cart.js';

const initialState = {
    cartList: [],
    cartCount: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartList(state, action) {
            const cartItem = action.payload.cartItem; 
            state.cartList = cartItemsCheck(state.cartList, cartItem);           
            console.log('state.cartList=>', state.cartList);
        },
        showCartList(state, action) {
            const products = action.payload.products;
            state.cartList = cartItemsAddInfo(products, state.cartList);          
            console.log('state.cartList=>', state.cartList);
        },
        countIncrement(state, action) {
            state.cartCount = state.cartCount + 1;
            console.log('state.cartCount=>', state.cartCount);
        },
        setTotalPrice(state, action) {
            const products = action.payload.products;
            state.totalPrice = getTotalPrice(products, state.cartList);
            console.log('state.totalPrice=>', state.totalPrice);
        },
        updateCartList(state, action) {
            const {cid, type } = action.payload;
            console.log(cid, type);
            
            state.cartList = state.cartList.map((item) => 
                item.cid === cid ?
                    type === '+'? {...item, qty: item.qty+1}   
                                : item.qty > 1 ? {...item, qty: item.qty-1} : item
                :   item  
            )
        },
        updateTotalPrice(state, action) {
            
            const {price, type} = action.payload;
            console.log(price, type);
            
            
            // //수량 변경에 따른 전체 상품 가격 변경
            // const item = state.cartList.find((item) => item.cid === cid);

            if (type === '+') {
                state.totalPrice += price;
            } else if (type === '-') {
                // if (item.qty > 1) {            
                //     item.qty -= 1;
                    state.totalPrice -= price;
                // } else if(item.qty === 1) {
                //     state.totalPrice = item.price;
                // } 
            }
            // console.log("updateTotalPrice==>" , cid, type, findItem.qty);
            // const qty = findItem.qty === 1 ? findItem.qty : findItem.qty;
            // type === '+'?  state.totalPrice = state.totalPrice + findItem.price 
            //                 : findItem.qty > 1  ? 
            //                         {findItem.qty -= 1
            //                         state.totalPrice = state.totalPrice-findItem.price}
            //                                 : state.totalPrice = state.totalPrice;
        },       
        
    },
})


export const { addCartList, countIncrement, showCartList, setTotalPrice,
    updateCartList, updateTotalPrice
 } = cartSlice.actions
export default cartSlice.reducer