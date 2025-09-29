## 📌 3. Redux 실습 : Counter


### ✅ **1. 실습 코드 환경 및 설명 (Redux, Redux Toolkit)**

```

💡 참고 사이트 - https://redux-toolkit.js.org/tutorials/quick-start

```

### **(1) basic-redux-app 생성**

```powershell
 npx create-react-app basic-redux-app
```


### **(2) 라이브러리 설치**

```bash
npm i react-redux
npm i redux
npm i @reduxjs/toolkit
```


### **(3) 코드 실행 결과**

![[카운터 실행 결과]](./images/04_counter.png)

[카운터 실행 결과]

- (+)증가 버튼 클릭 시 count는 1씩 증가됨, totalCount는 누적합으로 계산됨
- (-)감소 버튼 클릭 시 count는 1씩 감소됨, totalCount는 누적합을 뺌
- 초기값 버튼은 0으로 reset
- (+10), (-10)는 증가, 감소의 단위를 10으로 가짐, 누적합 계산은 안됨
#

### ✅ **2. 실습 코드 작성 (Redux, Redux Toolkit)**

**<Redux의 동작 과정>**

1️⃣ **컴포넌트에서 이벤트 발생** → 2️⃣ **Action 객체 생성** → 3️⃣ **dispatch()로 Action 전달** → 4️⃣ **Reducer가 상태 변경** → 5️⃣ **Store 업데이트 후 UI 렌더링**

#
   
1️⃣ 스토어 생성 : src/store.js

```jsx
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterReducer.js'

export const store = configureStore({
    reducer: {
        /** 리듀서 등록 */
        counter: counterReducer,
    },
})
```

2️⃣ index.js 파일에 스토어 적용 : src/index.js

```jsx
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

3️⃣ Reducer 객체 생성 : src/redux/counterReducer.js

```jsx
import { createSlice } from '@reduxjs/toolkit'

//공유 데이터
const initialState = {
    count : 0,
    totalCount: 0
}

//리듀서
const counterReducer = createSlice({
    name: 'counter',  //<-- store에 등록할 이름
    initialState,  //<--(객체호출)  //initialState: 0, (직접설정)
    reducers: {
        //기능 추가 : 증가, 감소, 초기화, 임의의 값으로 증가
        increment(state) {
            state.count += 1;
            state.totalCount += (state.count);
        },
        decrement(state) {
            if(state.count <= 0){
                alert('최소값은 0 입니다');
            } else {
                state.count -= 1;
                state.totalCount -= (state.count+1);
            }      
        },
        reset(state) {
            state.count = 0;
            state.totalCount = 0;
        },
        incrementByAmount(state, action) {
            // console.log('action ------>> ', action);
            
            state.count += action.payload;
            state.totalCount += action.payload;
        },
        decrementByAmount(state, action) {
            // console.log('action ------>> ', action);
            if(state.count <= 0){
                alert('최소값은 0 입니다');
            } else {
                state.count -= action.payload;
                state.totalCount -= action.payload;
            }              
        },
        
    }, //reducers
})//counterReducer

export const {  increment, 
								decrement, 
								reset, 
								incrementByAmount, 
								decrementByAmount } = counterReducer.actions
export default counterReducer.reducer
```

4️⃣ Counter 컴포넌트 생성 : src/components/Counter.jsx

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from '../redux/counterReducer.js';

export default function Counter() {
    const dispatch = useDispatch();
    const { count, totalCount} = useSelector(state => state.counter);

    return (
        <div>
            <h1>Count : {count}</h1>
            <h2>totalCount : {totalCount}</h2>
            <h3>
                <button type="button"
                        onClick={()=>{dispatch(increment())}}>(+)증가</button>
                <button type="button"
                        onClick={()=>{dispatch(decrement())}}>(-)감소</button>
                <button type="button"
                        onClick={()=>{dispatch(reset())}}>초기값</button>
                <button type="button"
                        onClick={()=>{dispatch(incrementByAmount(10))}}>증가(+10)</button>
                <button type="button"
                        onClick={()=>{dispatch(decrementByAmount(10))}}>감소(-10)</button>
            </h3>
        </div>
    );
}

```

5️⃣ App.js 파일에서 Counter 컴포넌트 호출

```jsx
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

```