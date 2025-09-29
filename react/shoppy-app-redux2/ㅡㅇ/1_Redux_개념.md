## 📌 1. Redux 개념 정리
Redux는 **React 애플리케이션의 상태 관리**를 위한 라이브러리입니다.   
전역 상태를 중앙에서 관리하며, 컴포넌트 간 데이터 공유와 상태 변경을 예측 가능하게 만들어 줍니다.
   
### ✅ **Redux의 핵심 개념**

Redux는 **단방향 데이터 흐름**을 따르며, 다음과 같은 주요 개념이 있습니다.

### 1️⃣ **Store (저장소)**

Redux의 **중앙 저장소**로, 애플리케이션의 모든 상태(state)를 관리합니다.
한 애플리케이션당 하나의 스토어를 가지며, 현재의 앱 상태와 리듀서, 내장함수를 포함합니다.

```
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // 리듀서 등록
  }
});

export default store;

```

### 2️⃣ **State (상태)**

Redux Store 안에 저장되는 데이터입니다.

React의 `useState`와 달리, Redux는 상태를 **전역적으로 관리**합니다.

### 3️⃣ **Action (액션)**

상태를 변경하는 유일한 방법으로, "어떤 동작을 수행할 것인지"를 정의하는 객체입니다.
상태에 변화가 필요할 때 발생시키며(객체 하나로 표현), Type을 필수로 그 외의 값들은 개발자 마음대로 정의할 수 있습니다.

```
const increment = () => {
  return { type: 'counter/increment' };
};

```

### 4️⃣ **Reducer (리듀서)**

Action을 기반으로 Store의 **상태를 업데이트하는 순수 함수**입니다.
변화를 일으키는 함수로서 현재의 상태와 액션을 참조하여 새로운 상태를 반환합니다.

```

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'counter/increment':
      return { count: state.count + 1 };
    case 'counter/decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

```

### 5️⃣ **Dispatch (디스패치)**

스토어의 내장함수로서 컴포넌트에서 액션을 발생시켜 상태를 변경할 때 사용합니다.

```

dispatch(increment());

```

---
   
## 🚀 **Redux의 동작 과정**

1️⃣ **컴포넌트에서 이벤트 발생** → 2️⃣ **Action 객체 생성** → 3️⃣ **dispatch()로 Action 전달** → 4️⃣ **Reducer가 상태 변경** → 5️⃣ **Store 업데이트 후 UI 렌더링**      

#
   


### ✅ **Redux의 장점**

- **전역 상태 관리**: 여러 컴포넌트에서 동일한 상태를 쉽게 공유

- **예측 가능성**: 상태 변경이 명확한 규칙에 의해 이루어짐

- **디버깅 용이**: Redux DevTools와 같은 도구 지원
     
         
### ❌ **Redux의 단점**

- **설정이 번거로움**: 작은 프로젝트에는 불필요하게 복잡할 수 있음

- **추가적인 코드 필요**: 액션, 리듀서, 스토어 설정 등 코드가 많아질 수 있음

#

### 🎯 **Redux를 사용할지 고민된다면?**

- **전역 상태 관리가 필요한가?** → Redux 추천

- **단순한 상태 관리라면?** → `useContext + useReducer` 대안 가능

#

### 🚀 Redux 더 깊이 공부하고 싶다면?

- **Redux 공식 문서**: https://redux.js.org/
- **Redux Toolkit 사용법**: https://redux-toolkit.js.org/              









