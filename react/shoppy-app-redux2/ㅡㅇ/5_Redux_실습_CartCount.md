## 📌 4. Redux 실습 : Shoppy-Redux - 장바구니


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

![[장바구니 실행 결과]](./images/05_sr_mycart.png)

[장바구니 실행 결과]

- 상품 상세 페이지에서 쇼핑백 추가 버튼 실행
- 로그인 여부 체크 후 
  로그인⭕ => 장바구니 아이템 하나 증가, 로그인❌ => 로그인 페이지 이동
- 상품의 사이즈가 동일한 경우에는 하나의 아이템으로 인식, 장바구니 확인 시 수량 증가 확인
- 로그인 시 장바구니에 이미 추가된 아이템 카운트 출력
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
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /** 장바구니 카운트 set */
        setCount(state, action) {
            state.count = action.payload.count;
        },
        /** 장바구니 카운트 reset */
        resetCount(state) {
            state.count = 0;
        }
    },
})


export const { setCount, resetCount } = cartSlice.actions
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
console.log(url, data);

    try {
        result = await axios({
        method : 'post',
        url : url,
        data : data  
        }).then(res => res.data);   
    } catch (error) {}

    return result;    
}


```
      
- 파일명 : src/services/cartAPI.js  

```
import { axiosPost } from './api.js';
import { setCount, resetCount } from '../features/cart/cartSlice.js';

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


5️⃣ Header 컴포넌트 생성 : src/components/Header.jsx

```
...
import { useSelector, useDispatch} from 'react-redux';
import { getIsLogout} from '../services/authAPI.js';
import { getCount, clearCount } from '../services/cartAPI.js';

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = localStorage.getItem("user_id");
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const cartCount = useSelector(state => state.cart.count);

    //로그인 상태에 따라 cartCount 값 변경
    useEffect(()=>{
        isLoggedIn  ?    dispatch(getCount()) :   dispatch(clearCount());
    }, [isLoggedIn]);

    const handleLoginToggle = () => {
        if(isLoggedIn) { 
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
            select ?   dispatch(getIsLogout()) :  navigate('/login');
        } else {
            navigate('/login');
        }
    }  

    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy-Redux</span>
                </Link>
                <nav className='header-right'>                    
                    <Link to='/all'>Products</Link>
                    <Link to='/cart' className="header-icons-cart-link">
                        <LuShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>
                    { isLoggedIn && 
                        <Link to='/mypage'>MyPage</Link>
                    }
                    <button type="button" onClick={handleLoginToggle}>
                        { isLoggedIn ? "Logout" : "Login" }
                    </button>
                    <Link to='/signup'>
                        <button type="button">Signup</button>
                    </Link>  
                    
                    { isLoggedIn && 
                        <Link to='/products/new'>
                            <button type="button">New Product</button>
                        </Link> 
                    }
                    { isLoggedIn &&   <Link>[{id}]님</Link> }                    
                </nav>
            </div>
        </div>
    );
}


```

[🎥 동영상 보기 - Header의 장바구니 아이템 카운트]  
- 로그인 시 회원아이디별로 장바구니 아이템 카운트를 헤더에 표시   
- 로그아웃 시 장바구니 아이템 카운트 리셋

![[동영상 미리보기]](./images/shoppy-redux-cartcount.gif)