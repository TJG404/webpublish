import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    const { setCartCount, setCartList } = useContext(CartContext); 


    //장바구니 아이템 추가
    const addCart = () => {
    }

    return { addCart }
}

