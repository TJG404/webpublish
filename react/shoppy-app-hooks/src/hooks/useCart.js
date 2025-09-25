import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice,  
         cartItemsCheck, updateCartItemsQty } from '../utils/cart.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    const { setCartCount, setCartList,
            cartList, cartCount
                                } = useContext(CartContext); 


    //장바구니 아이템 추가
    const addCart = (cartItem) => {  // <-- ProductDetail 쇼핑백 추가 이벤트 처리
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount + 1);
    }

    //장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가 
    const showCart = () => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, cartList));
            // setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }

    return { addCart, showCart }
}

