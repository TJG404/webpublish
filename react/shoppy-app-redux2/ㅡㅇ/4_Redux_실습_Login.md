## 📌 4. Redux 실습 : Shoppy-Redux - 로그인/로그아웃


### ✅ **1. 실습 코드 환경 및 설명 (Redux, Redux Toolkit)**

```

💡 참고 사이트 - https://redux-toolkit.js.org/tutorials/quick-start

```

### **(1) shoppy-redux 프로젝트 준비(생성 또는 깃클론)**

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

![[로그인 before]](./images/05_login_before.png)
![[로그인 success]](./images/05_login_success_.png)


[로그인 실행]

- 상단의 헤더에서 로그인 메뉴 클릭 후 로그인 페이지로 이동
- 아이디/패스워드 입력 후 로그인 진행
- 로그인⭕ => 장바구니 아이템, 로그인 버튼이 로그아웃 버튼으로 변경, 상품등록 메뉴와 회원아이디 출력
- 로그인❌ => 로그인 실패 메시지 출력 후 재로그인을 위해 로그인 페이지 이동

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
│   ├── auth/          # 특정 기능 관련 Redux 모듈
│   │   ├── authSlice.js       # Redux Toolkit 슬라이스
│   │   ├── authAPI.js         # API 요청 파일 (필요 시)
│   │   ├── authSelectors.js   # Selector 함수 (선택 사항)
│── components/         # 재사용 가능한 UI 컴포넌트
│── pages/              # 라우트 단위의 페이지 컴포넌트
│── hooks/              # 커스텀 훅 (예: useSelector, useDispatch 활용)
│── services/           # API 정의
│   ├── api.js          # 중앙 API 설정
│   ├── authApi.js      # 인증 관련 API
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

2️⃣ index.js 파일에 스토어 적용 : src/index.js

```jsx
import { store } from './app/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

```

3️⃣ Slice(Reducer) 객체 생성 : src/features/auth/authSlice.js - 로그인, 로그아웃

```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        /** 로그인 */
        setIsLoggedIn(state, action) {            
            if(action.payload.result_rows) state.isLoggedIn = true;
        },
        /** 로그아웃 */
        setIsLogout(state) {
            state.isLoggedIn = false ;
        }
    },
})

export const { setIsLoggedIn, setIsLogout } = authSlice.actions
export default authSlice.reducer

```

4️⃣ API 객체 생성    
→ src/services/api.js - 공통 API로 DB 연동을 위한 axiosGet, axiosPost 정의   
→ src/services/authAPI.js - 로그인, 로그아웃 인증을 위한 API 작업     
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
      
- 파일명 : src/services/authAPI.js  

```
import { axiosPost } from './api.js';
import { setIsLoggedIn, setIsLogout } from '../features/auth/authSlice.js';

/**
 * 로그아웃
 */
export const getIsLogout = () => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    dispatch(setIsLogout());
}


/**
 * 로그인
 */
export const getIsLogin = (formData) => async(dispatch) => {
    const url = 'http://localhost:9000/member/login';
    const data = formData;

    const loginResult = await axiosPost({url, data});            
    const result_rows = loginResult.result_rows;

    if(result_rows === 1){     
        localStorage.setItem("token", loginResult.token);
        localStorage.setItem("user_id", formData.id);                        

        dispatch(setIsLoggedIn({result_rows})); 
    }
}

```

5️⃣ Login 컴포넌트 : src/pages/Login.jsx - 로그인 

```
...
import { validateLogin } from '../utils/funcValidate.js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';
import { getIsLogin } from '../services/authAPI.js';
import { useSelector, useDispatch} from 'react-redux';

export default function Login() {
    // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({'id':'', 'pwd':''});
    const refs = {  "idRef" : useRef(null),   "pwdRef" : useRef(null)    }  
    const msgRefs = {  "msgRef" : useRef(null)   }

    /** 로그인 결과 : 리덕스는 단방향으로 진행되므로 store에 저장된 값을 useSelector를 통해 가져와서 결과를 체크함  */
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    useEffect(()=>{
        if(isLoggedIn){
            alert('로그인에 성공하셨습니다.');
            navigate('/');
        }  
    }, [isLoggedIn]);


    /** form 데이터 입력 함수 */
    const handleChangeForm = (event) => {
        const {name, value} = event.target; 
        setFormData({...formData, [name] : value}); 
    }

    /** Submit 함수 */
    const handleLoginSubmit = (event) => {
        event.preventDefault();        
        if(validateLogin(refs, msgRefs)) {
            //리덕스 툴킷에 내장된 redux thunk를 통해 비동기식 호출진행 : async, await없이 dispatch()로 감싸서 호출
            dispatch(getIsLogin(formData));   
        }
    }

    return (
      ...
    );
}

```

6️⃣ Header 컴포넌트 : src/components/Header.jsx - 로그아웃   
→ 로그인 성공 시 새로고침(F5)을 진행하면 리덕스의 state 값들은 모두 초기화 된다.      
→ 리덕스는 메모리에서 작업되기 때문이다. 그래서 store.js 에서 리덕스의 현재 state 값들을 복제하여 로컬스토리지에 저장하는 함수를 추가한 것이다.!!!
   

```
...
import { useSelector, useDispatch} from 'react-redux';
import { getIsLogout } from '../services/authAPI.js';

export default function Header() {
    // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { getCount, setCount } = useCart(); 
    const { cartCount } = useContext(CartContext);
    const navigate = useNavigate();
    const id = localStorage.getItem("user_id");
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);

    //로그인 상태에 따라 cartCount 값 변경
    useEffect(()=>{
        isLoggedIn  ?    getCount() :   getCount();
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


     
[🎥 동영상 보기 - 로그인/로그아웃/새로고침]  

![[동영상 미리보기]](./images/shoppy-redux-login.gif)




