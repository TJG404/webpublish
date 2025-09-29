## 📌 4. Redux 실습 : Shoppy-Redux - 장바구니 리스트


### ✅ **1. 실습 코드 환경 및 설명 (Redux, Redux Toolkit)**

```

💡 참고 사이트 - https://redux-toolkit.js.org/tutorials/quick-start

```

### **(1) shoppy-redux 프로젝트 준비**

```powershell
 npx create-react-app shoppy-redux
```


### **(2) 라이브러리 설치**

```bash
npm i react-redux
npm i redux
npm i @reduxjs/toolkit
```


### **(3) 코드 실행 결과**

![[장바구니 실행 결과]](./images/06_sr_mycart_list.PNG)

[장바구니 리스트 결과]

- 로그인 여부 체크 후      
  로그인⭕ => 로그인한 회원의 아이디로 장바구니 아이템을 조회하여 출력,       
  로그인❌ => 로그인이 필요한 서비스임을 메시지로 Alert, 로그인 페이지 이동     
- 장바구니 아이템의 증가/감소 버튼 실행 시 값변경, 총합계 자동 업데이트      
- 장바구니 아이템의 삭제 아이콘 클릭 시 테이블에서도 삭제 후 페이지 자동 업데이트      
#

### ✅ **2. 실습 코드 작성 (Redux, Redux Toolkit)**

**<Redux의 동작 과정>**

1️⃣ **컴포넌트에서 이벤트 발생** → 2️⃣ **Action 객체 생성** → 3️⃣ **dispatch()로 Action 전달** → 4️⃣ **Reducer가 상태 변경** → 5️⃣ **Store 업데이트 후 UI 렌더링**

#
#### **📁 Redux 폴더 구조**

```

src/
│── app/
│   ├── store.js        # Redux 스토어 설정
│── features/           # Redux 관련 기능별 구조
│   ├── auth/           # 인증(로그인) 기능 관련 Redux 모듈
│   │   ├── authSlice.js       # Redux Toolkit 슬라이스
│   │   ├── authAPI.js         # API 요청 파일 (필요 시)
│   │   ├── authSelectors.js   # Selector 함수 (선택 사항)
│   ├── cart/          # 장바구니 기능 관련 Redux 모듈
│   │   ├── cartSlice.js       # Redux Toolkit 슬라이스
│   │   ├── cartAPI.js         # API 요청 파일 (필요 시)
│   │   ├── cartSelectors.js   # Selector 함수 (선택 사항)
│── components/         # 재사용 가능한 UI 컴포넌트
│── pages/              # 라우트 단위의 페이지 컴포넌트
│── hooks/              # 커스텀 훅 (예: useSelector, useDispatch 활용)
│── services/           # API 정의
│   ├── api.js          # 중앙 API 설정
│   ├── authAPI.js      # 인증 관련 API
│   ├── cartAPI.js      # 장바구니 관련 API
│── utils/             # 유틸리티 함수 모음


```     

1️⃣ 스토어 생성 : src/app/store.js      
**리덕스의 상태를 로컬스토리지에 저장하므로, 간혹  store의 값이 반영이 안되는 경우가 발생함. 이런경우 로컬스토리지 백업 데이터 삭제 후 재 실행**
```
import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice.js'
import cartSlice from '../features/cart/cartSlice.js'

// ✅ localStorage에서 상태 불러오기 - 새로고침 시 로컬스토리지에 저장된 Redux의 복제 환경을 로드함
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error("Redux 상태 로드 실패:", error);
        return undefined;
    }
};

export const store = configureStore({
    reducer: {
        login : authSlice,
        cart : cartSlice
    },
    preloadedState: loadState(),
})

// ✅ 상태 변경 시 localStorage에 저장 - 새로고침(F5)의 경우 Redux 메모리 초기화 발생
// Redux의 state 환경을 그대로 복제해서 로컬스토리지에 저장함
store.subscribe(() => {
    try {
        const serializedState = JSON.stringify(store.getState());
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.error("Redux 상태 저장 실패:", error);
    }
});

```


2️⃣ index.js 파일에 스토어 적용 : src/index.js - 스토아 처음 생성시에만 적용

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();

```

3️⃣ Slice(Reducer) 객체 생성 : src/features/cart/cartSlice.js - 장바구니

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,   
    totalPrice: 0,  
    list: [],   
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCount(state, action) { /** 장바구니 카운트 set */
            state.count = action.payload.count;
        },
        resetCount(state) { /** 장바구니 카운트 reset */
            state.count = 0;
        },
        setList(state, action) { /** 장바구니 리스트 */
            state.list = action.payload.list;
        },
        setTotalPrice(state, action) { /** 장바구니 아이템 총합계 */        
            state.totalPrice = action.payload.list.reduce((sum, item) => sum + item.price * item.qty, 0);
        }
    },
})


export const { setCount, resetCount, setList, setTotalPrice } = cartSlice.actions
export default cartSlice.reducer
```


4️⃣ API 객체 생성    
→ src/services/api.js - 공통 API로 DB 연동을 위한 axiosGet, axiosPost 정의   
→ src/services/cartAPI.js - 장바구니를 위한 API 작업     
React에서 API는 **외부 데이터와 상호작용하기 위해 사용하는 인터페이스**입니다.    
일반적으로 백엔드 서버의 REST API 또는 GraphQL API를 호출하여 데이터를 가져오거나, 저장하는 역할을 합니다.    
     
- 파일명 : src/services/api.js     

```
/**
 * Axios를 사용하는 경우 보통 이 파일에서 Axios 인스턴스를 설정
 */
import axios from 'axios';

/** GET Method */
export async function axiosGet({url}){
    let result = null;
    try {   
        result = await axios.get(url)
                            .then(res => res.data);
    } catch (error) {}

    return result;
}

/** POST Method */
export async function axiosPost({url, data}){
    let result = null;

    try {
        result = await axios({
        method : 'post',
        url : url,
        data : data  
        }).then(res => res.data);   
    } catch (error) {}

    return result;    
}

/** PUT Method */
export async function axiosPut({url, data}){
    let result = null;

    try {
        result = await axios({
        method : 'put',
        url : url,
        data : data  
        }).then(res => res.data);   
    } catch (error) {}

    return result;    
}

/** DELETE Method */
export async function axiosDelete({url, data}){
    let result = null;

    try {
        result = await axios({
        method : 'delete',
        url : url,
        data : data
        }).then(res => res.data);   
    } catch (error) {}

    return result;    
}

```
      
- 파일명 : src/services/cartAPI.js  

```
import { axiosPost, axiosPut, axiosDelete } from './api.js';
import { setCount, resetCount, setList, setTotalPrice } from '../features/cart/cartSlice.js';


/**
 * 장바구니 아이템 삭제
 */
export const deleteCartItem = (cid) => async(dispatch) => {
    const url = 'http://localhost:9000/cart/deleteItem';
    const data = {"cid": cid};

    const {result_rows} = await axiosDelete({url, data});
    result_rows && dispatch(getCartList());    //비동기식 호출이므로 dispatch()를 통해 호출해야 한다!!!
}

/** 
 * 장바구니 아이템 수량 업데이트
 */
export const updateCartList = (cid, type) => async(dispatch) => {  
    const url = 'http://localhost:9000/cart/updateQty';
    const data = {"cid":cid, "type": type};

    const {result_rows} = await axiosPut({url, data});
    // console.log('updateQty ==> ', result_rows);
    result_rows &&  dispatch(getCartList());    //비동기식 호출이므로 dispatch()를 통해 호출해야 한다!!!    
}


/**
 * 장바구니 리스트
 */
export const getCartList = () => async(dispatch) => {
    const id = localStorage.getItem("user_id");
    const url = 'http://localhost:9000/cart/items';
    const data = {"id":id};

    const list = await axiosPost({url, data});
    dispatch(setList({list}));
    dispatch(setTotalPrice({list}));   
}


/**
 * 장바구니 전체 카운트 조회
 */
export const getCount = () => async(dispatch) => {
    const id = localStorage.getItem("user_id");
    const url = 'http://localhost:9000/cart/count';
    const data = {"id":id};
    
    const result = await axiosPost({url, data});
    const count = result.count;    
    dispatch(setCount({count}));
}

/**
 * 장바구니 카운트 리셋
 */
export const clearCount = () => async(dispatch) => {
    dispatch(resetCount());
}

```


5️⃣ Carts 컴포넌트 생성 : src/pages/Carts.jsx

```
...
import { useSelector, useDispatch } from "react-redux";
import { getCartList, updateCartList, deleteCartItem } from "../services/cartAPI.js";
import "../styles/cart.css";

export default function Carts() {
    // const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const cartList = useSelector(state => state.cart.list);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    // const hasCheckedLogin = useRef(false);     
    
    useEffect(()=>{  
        // if (hasCheckedLogin.current) return;  // true:로그인 상태 -->  블록 return
        //     hasCheckedLogin.current = true; 

        if(isLoggedIn) {
            dispatch(getCartList());
        } else {  
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
            select ?  navigate('/login') :  navigate('/');
            // setCartList([]);
        }
    } , [isLoggedIn]);

    
    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {
            cartList && cartList.map(item => 
            <div key={item.cid}>
                <div className="cart-item" key={item.cid} >
                <img src={item.image} alt={item.pname} />
                <div className="cart-item-details">
                    <p className="cart-item-title">{item.pname}</p>
                    <p className="cart-item-title">{item.size}</p> 
                    <p className="cart-item-price">
                    {item.price}원
                    </p>
                </div>
                <div className="cart-quantity">
                    <button onClick={() => {
                        item.qty>1 && dispatch(updateCartList(item.cid, "decrease"))
                    }}>
                    -
                    </button>
                    <input type="text" value={item.qty} readOnly />
                    <button onClick={() => {dispatch(updateCartList(item.cid, "increase"))}}>
                    +
                    </button>
                </div>
                <button className="cart-remove" onClick={()=>{dispatch(deleteCartItem(item.cid))}}>
                    <RiDeleteBin6Line />
                </button>
                </div> 
            </div>
            )
        }   

        {/* 주문버튼 출력 시작 */}
        { cartList.length ? 
            <>
                <div className="cart-summary">
                    <h3>주문 예상 금액</h3>
                    <div className="cart-summary-sub">
                        <p className="cart-total"><label>총 상품가격 :</label><span>{totalPrice.toLocaleString()}원</span></p>
                        <p className="cart-total"><label>총 할인 :</label><span>-0원</span></p>
                        <p className="cart-total"><label>총 배송비 :</label><span>+0원</span> </p>
                    </div>
                    <p className="cart-total2"><label>총 금액 :</label><span>{totalPrice.toLocaleString()}원</span></p>
                </div>
                <div className="cart-actions">                      
                    <button onClick={()=>{ navigate("/checkout") }}>주문하기</button>                    
                </div>
            </> 
            : 
            <div >                       
                <p>장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/all">상품보러 가기</Link> <br/><br/></p>
                <img src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU5RSVBNSVFQiVCMCU5NCVFQSVCNSVBQyVFQiU4QiU4OHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div> 
        }       
        {/* 주문버튼 출력 종료 */}      
        
        </div>
    );
    }




```

[🎥 동영상 보기 - 장바구니 리스트]  
- 헤더의 장바구니 아이콘을 클릭하면 장바구니 리스트로 이동  
- 로그아웃 시 장바구니 아이템 카운트 리셋

![[동영상 미리보기]](./images/shoppy-redux-cartlist.gif)