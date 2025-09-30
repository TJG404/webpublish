import React from 'react';
import { addCartItem, updateCartCount, showCartItem } from './cartSlice.js';
import { axiosData } from '../../utils/dataFetch.js';

export const showCart = () => async (dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    dispatch(showCartItem({"items": jsonData}));
    // setCartList(cartItemsAddInfo(jsonData, cartList));
    // setTotalPrice(getTotalPrice(jsonData, cartList));
}

export const addCart = (cartItem) => async (dispatch) => {
    dispatch(addCartItem({"cartItem":cartItem})); 
    dispatch(updateCartCount());
}

