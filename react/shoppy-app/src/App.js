import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/shoppy.css';

export default function App() {
  //1. 장바구니 수량 관리 : setCartCount
  const [cartCount, setCartCount] = useState(0);

  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]);  //[{cartItem},{...}]
  
  const addCart = (cartItem) => {
    //pid, size가 동일한 경우 qty 증가, cartItems 없는 경우 새로 추가
    // setCartItems([...cartItems, cartItem]);
    setCartItems((prevItems) => {
        //존재여부 체크
        const existItem = prevItems.find((item) => 
                              item.pid === cartItem.pid && item.size === cartItem.size);

        if(existItem) { //존재하면 map으로 순회하면서 pid, size가 동일한 item에 qty +1 증가
          return prevItems.map((item) =>  //map은 새로운 배열 반환
            item.pid === cartItem.pid && item.size === cartItem.size
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        } else {         
          return [...prevItems, { ...cartItem }];  //존재하지 않으면 새로운 item 추가
        }
      });

    setCartCount(cartCount + 1);
  }

  console.log(cartItems, cartCount);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home/>} />
          <Route path="/all" element={<Products/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:pid" element={<ProductDetail addCart={addCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}







