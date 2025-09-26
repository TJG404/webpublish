import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';
import '../styles/cart.css';

export function Cart({ items, updateCart }) {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);   
    
    useEffect(()=> {
        const fetch = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
            setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }, []);    

    //수량 업데이트 함수
    const handleUpdateCartList = (cid, type) => {
        setCartList((cartList) => cartList.map((item) => 
                item.cid === cid ?
                    type === '+'? {...item, qty: item.qty+1}   
                                : item.qty > 1 ? {...item, qty: item.qty-1} : item
                :   item  
        ));

        const findItem = cartList.find((item) => item.cid === cid);
        type === '+'?  setTotalPrice(totalPrice + findItem.price) 
                        : findItem.qty > 1 ? setTotalPrice(totalPrice-findItem.price)
                                        : setTotalPrice(totalPrice);
        updateCart(cid, type);
    }

    //장바구니 아이템 삭제 함수
    const handleRemoveCartList = (cid) => {
        const findItem = cartList.find(item => item.cid === cid);
        setTotalPrice(totalPrice - (findItem.qty * findItem.price));

        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));  
        });

        updateCart(cid);
    }

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            { cartList && cartList.map(item => 
                <div key={item.pid}>
                    <div className='cart-item'>
                        <img src={item.image} alt="product img" />
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{item.name}</p>
                            <p className='cart-item-title'>{item.size}</p>
                            <p className='cart-item-price'>
                                {parseInt(item.price).toLocaleString()}원</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='button'
                                    onClick={()=>{ item.qty > 1 &&
                                                    handleUpdateCartList(item.cid, '-')}}>-</button>
                            <input type='text' value={item.qty} readOnly/>
                            <button type='button'
                                    onClick={()=>{handleUpdateCartList(item.cid, '+')}}>+</button>
                        </div>
                        <button className='cart-remove'
                                onClick={()=>{handleRemoveCartList(item.cid)}}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>    
            )}

            {/* 주문 버튼 출력 */}
            { cartList && cartList.length > 0 ?
                <>
                    <div className='cart-summary'>
                        <h3>주문 예상 금액</h3>
                        <div className='cart-summary-sub'>
                            <p className='cart-total'>
                                <label>총 상품 가격 : </label>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 할인 가격 : </label>
                                <span>0원</span>
                            </p>
                            <p className='cart-total'>
                                <label>총 배송비 : </label>
                                <span>0원</span>
                            </p>
                        </div>
                        <p className='cart-total2'>
                            <label>총 금액 : </label>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </p>
                    </div>
                    <div className='cart-actions'>
                        <button type='button'
                                onClick={()=>{
                                    navigate("/checkout", {state: {cartList: cartList, 
                                                                   totalPrice: totalPrice}});
                                }}>주문하기</button>
                    </div>
                </>
              :  <div>
                    <p> 장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/all">상품보러가기</Link>
                    </p>
                    <img src="/images/cart.jpg" 
                         style={{width:"50%", marginTop:"20px"}} />
                </div>
            }
        </div>
    );
}

