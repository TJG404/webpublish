import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';

import { cartItemsCheck } from './utils/cart.js';

import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/shoppy.css';

export default function App() {
  const [cartCount, setCartCount] = useState(0);  //1. 장바구니 수량 관리  
  const [cartItems, setCartItems] = useState([]); //2. 장바구니 아이템 관리
  
  const addCart = (cartItem) => {  // <-- ProductDetail 쇼핑백 추가 이벤트 처리
    setCartItems(cartItemsCheck(cartItems, cartItem));
    setCartCount(cartCount + 1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home/>} />
          <Route path="/all" element={<Products/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart items={cartItems} />} />
          <Route path="/products/:pid" element={<ProductDetail addCart={addCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}







