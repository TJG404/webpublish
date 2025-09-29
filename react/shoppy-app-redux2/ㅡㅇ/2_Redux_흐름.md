## 📌 2. Redux 프로세스 흐름


### 🎯 **Redux ↔ react-redux ↔ React 흐름**

```

  Redux    ←→    react-redux    ←→    React (UI)
(상태 관리)         (연결 역할)         (컴포넌트)

```

| **역할** | **설명** | **예제 코드** |
| --- | --- | --- |
| 🏛 **Redux** | 상태(state)를 중앙에서 관리하는 라이브러리 | `configureStore()`, `createSlice()` |
| 🔗 **react-redux** | Redux와 React를 연결하는 라이브러리 | `Provider`, `useSelector()`, `useDispatch()` |
| 🎨 **React** | UI를 렌더링하는 라이브러리 | `function App() { return <Counter />; }` |

---

### ✅ **Redux ↔ react-redux ↔ React 흐름**

| 단계 | Redux | react-redux | React |
| --- | --- | --- | --- |
| 1️⃣ **상태 정의** | `createSlice()`로 state 및 reducer 생성 | - | - |
| 2️⃣ **Store 생성** | `configureStore()` 사용 | - | - |
| 3️⃣ **Store 제공** | `store` 생성 후 `export` | `<Provider store={store}>`로 감싸기 | `<App />`을 감싸서 Redux 사용 가능하게 함 |
| 4️⃣ **상태 가져오기** | `state.counter` 형태로 접근 가능 | `useSelector(state => state.counter)` 사용 | `const count = useSelector(...);` |
| 5️⃣ **액션 실행** | `dispatch(action)`으로 상태 변경 | `useDispatch()` 사용 | `dispatch(increment())` |
| 6️⃣ **컴포넌트 업데이트** | 상태 변경됨 | Redux Store 업데이트 감지 | `useSelector()`로 상태 변경 자동 반영 |

---

### 📌 **전체적인 개념 요약**

> Redux: 상태(state) 및 상태 변경(reducer) 관리
> 
> 
> **react-redux**: Redux 상태를 React에서 쉽게 사용할 수 있도록 연결
> 
> **React**: Redux에서 제공하는 상태를 받아와 화면을 렌더링
> 

---

## ❓어떤 **Redux 라이브러리를 사용하는 것이 좋을까?**

### 🚀 **Redux vs @reduxjs/toolkit 차이점 정리**

Redux를 사용할 때 **기본 Redux 라이브러리**와 **@reduxjs/toolkit (RTK)** 중 어떤 것을 선택할지 고민될 수 있습니다. 두 라이브러리의 차이를 정리해 드릴게요.

---

## ✅ **1. 기본 Redux vs Redux Toolkit 차이 (비교 표)**

| 비교 항목 | **기본 Redux** | **@reduxjs/toolkit (RTK)** |
| --- | --- | --- |
| **설정** | 직접 액션/리듀서/스토어를 설정해야 함 | `createSlice()`, `configureStore()` 등 자동화된 설정 제공 |
| **코드 길이** | 보일러플레이트 코드 많음 | 코드가 짧고 간결함 |
| **리듀서 작성 방식** | `switch` 문을 사용 | `createSlice()`로 간편하게 관리 |
| **비동기 처리** | `redux-thunk` 또는 `redux-saga`를 별도로 추가해야 함 | `createAsyncThunk()`로 비동기 로직 기본 제공 |
| **Immutable(불변성) 관리** | 직접 `spread 연산자(...)`나 `immer` 사용해야 함 | `immer`가 내장되어 불변성 자동 관리 |
| **개발자 도구** | `redux-devtools-extension`을 추가해야 함 | 기본적으로 `Redux DevTools` 내장 |
| **학습 난이도** | 상대적으로 어려움 | 상대적으로 쉬움 |

---

## ✅ **2. 라이브러리 설치 (Redux vs Redux Toolkit)**

### 1️⃣ **React-Redux**

```bash
npm i react-redux
```

![redux toolkit](./images/01_react_redux.png)

### 2️⃣ **Redux**

```bash
npm i redux
```

![redux toolkit](./images/02_redux.png)

### 3️⃣ **Redux Toolkit**

```bash
npm i @reduxjs/toolkit
```

![redux toolkit](./images/03_redux_toolkit.png)
  


               









