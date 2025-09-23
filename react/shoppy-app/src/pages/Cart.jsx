import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import '../styles/cart.css';

export function Cart({ items }) {
    console.log('items-->', items);

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            { items && items.map(item => 
                <div key={item.pid}>
                    <div className='cart-item'>
                        {/* 상품 이미지 */}
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{/* 상품명  */}</p>
                            <p className='cart-item-title'>{item.size}</p>
                            <p className='cart-item-price'>{/* 상품가격 */}</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='button'>-</button>
                            <input type='text' value={item.qty} readOnly/>
                            <button type='button'>+</button>
                        </div>
                        <button className='cart-remove'>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>    
            )}
        </div>
    );
}

