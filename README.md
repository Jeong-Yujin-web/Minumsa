# Minumsa React project

민음사 웹사이트를 React를 활용하여 리뉴얼하였습니다.

> React의 컴포넌트 기반 구조와 SPA의 특성을 활용하여
> 다양한 콘텐츠를 효율적으로 구성하고 사용자 경험을 개선하였습니다.

## ✨ 주요 기능

* 메인 / 도서 / 출판사 / 커뮤니티 / 이벤트 페이지 구현
* 도서 목록 및 상세 콘텐츠 구현
* 도서 카테고리 및 유형별 콘텐츠 필터링
* 장바구니 및 찜 기능 구현
* 로그인 및 사용자 상태 관리
* React Router를 활용한 SPA 페이지 이동
* Redux Toolkit을 활용한 전역 상태 관리

## 🛠️ 기술 스택

### Markup

* HTML5
* CSS3

### Frontend

* JavaScript
* React
* React Router
* Redux Toolkit
* React Bootstrap
* Styled-components
* React Icons

### Tools

* GitHub
* Figma
* ChatGPT

## 📁 프로젝트 구조

```text
Minumsa_React
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── slices/
│   ├── store/
│   ├── styles/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── setupTests.js
└── README.md
```

## ⭐ 주요 구현 내용

### 01. React 컴포넌트 기반 콘텐츠 UI
```text
반복적으로 사용되는 도서, 커뮤니티, 이벤트 등의 UI를 컴포넌트로 분리하여
재사용할 수 있도록 구현하였습니다.
```
https://github.com/user-attachments/assets/4dc8192a-9389-459d-8652-51df45d3b750

### 02. React Router를 활용한 SPA
```text
React Router를 활용하여 페이지별 URL을 구성하고,
새로고침 없이 페이지가 전환되는 SPA 방식으로 구현하였습니다.
```
https://github.com/user-attachments/assets/fbbad9f4-b9ae-4f7e-91bc-21d396127d03

### 03. 로그인 및 사용자 상태 관리
로그인 성공 시 GNB에 사용자 이름을 표시하고, 로그인 상태에 따라 로그인 UI와 사용자 정보 및 로그아웃 UI가 변경되도록 구현하였습니다.

https://github.com/user-attachments/assets/03d369a7-4b6f-4e29-b88a-3ef3d9d2b547

#### 💻 핵심 코드 보기
<details>
<summary>🔍 Login.js 코드 펼치기</summary>

```javascript
import { useEffect, useState } from 'react';
import { SiNaver } from 'react-icons/si';
import { FaApple, FaGoogle } from 'react-icons/fa';
import styled from 'styled-components';
import userList from '../data/users';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, logout } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [saveId, setSaveId] = useState(false);

  // 쿠키 가져오기
  const getCookie = (key) => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(key + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
  };

  // 쿠키 설정하기
  const setCookie = (key, value, day) => {
    const date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = `${key}=${encodeURIComponent(value)};expires=${date.toGMTString()}`;
  };

  // 쿠키 삭제하기
  const deleteCookie = (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  // 컴포넌트 마운트 시 저장된 아이디 확인
  useEffect(() => {
    const cookieId = getCookie('key');
    if (cookieId) {
      setUserId(cookieId);
      setSaveId(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userList.find(user => user.userId === userId && user.password === userPw);

    // 아이디 저장 체크 여부에 따른 쿠키 처리
    if (saveId) {
      setCookie('key', userId, 3);
    } else {
      deleteCookie('key');
    }

    if (user) {
      dispatch(changeName(user.name));
      alert(`${user.name}님 로그인 성공`);
      navigate('/');
    } else {
      if (!saveId) setUserId('');
      setUserPw('');
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };
  
  if (userName) {
    return (
      <Wrapper>
        <h3 className="title">{userName}님</h3>
        <p>현재 로그인되어 있습니다.</p>
        <button onClick={() => dispatch(logout())} style={{marginTop:'30px', width:'100px', padding:'5px', border:'none', borderRadius:'10px'}}>
          로그아웃
        </button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* ... 하단 로그인 폼 및 소셜 로그인 버튼 마크업 생략 ... */}
    </Wrapper>
  );
}
```
</details>

#### 💡 셀프 코드리뷰 & 배운 점 (AI 협업)
* **쿠키 제어 로직 학습**: '아이디 저장' 기능을 구현하면서 바닐라 JavaScript로 쿠키를 생성하고 조회하는 `getCookie`, `setCookie` 함수를 작성했습니다. `document.cookie`에 저장된 값을 가져와 필요한 데이터로 나누어 사용하는 과정을 구현하면서 쿠키의 동작 방식과 브라우저 저장소에 대해 이해할 수 있었습니다.

* **상태 관리와 라우터 흐름 이해**: 로그인에 성공하면 Redux 스토어에 사용자 이름을 저장하고 `useNavigate`를 사용해 메인 페이지로 이동하도록 구현했습니다. 로그인 상태가 변경되면서 Redux의 상태와 화면이 어떻게 연결되는지 직접 구현하며 데이터의 흐름을 이해할 수 있었습니다.

* **앞으로의 보완점 (프론트엔드 역량 강화)**: 현재는 백엔드 서버가 없는 환경이라 `userList`에 임시 데이터를 저장하고 로그인 정보를 확인하는 방식으로 구현했습니다. 실제 서비스에서는 프론트엔드에서 비밀번호를 직접 비교하지 않기 때문에, 앞으로는 `Fetch API`를 활용해 백엔드 인증 API와 통신하는 로그인 기능을 구현해 보고 싶습니다. 이를 통해 실제 서비스에서 사용하는 프론트엔드 인증 흐름까지 이해하고 직접 구현할 수 있도록 보완할 예정입니다.


### 04. Redux Toolkit을 활용한 상태 관리
Redux Toolkit을 활용하여 사용자 정보와 장바구니, 찜 목록 등의 상태를 전역으로 관리하고 상품 추가·삭제 및 수량 변경 기능을 구현하였습니다.

https://github.com/user-attachments/assets/93952252-42b2-4b4f-bc87-47ff2cb2e95a

#### 💻 핵심 코드 보기
<details>
<summary>🔍 cartSlice.js (Redux 스토어 로직) 펼치기</summary>

```javascript
import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // 장바구니 상품 추가 (중복 상품 예외 처리)
    addItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index > -1) {
        state[index].count++;
      } else {
        state.push({
          ...action.payload,
          count: action.payload.count || 1,
        });
      }
    },
    // 단일 상품 삭제
    deleteItem(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      if (index > -1) state.splice(index, 1);
    },
    // 수량 증가
    addCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      if (index > -1) state[index].count++;
    },
    // 수량 감소 (음수 방지 최소값 제한 예외 처리)
    subCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      if (index > -1) {
        if (state[index].count <= 1) {
          state[index].count = 1; // 1개 밑으로 내려가지 않도록 보완
        } else {
          state[index].count--;
        }
      }
    }
  }
});

export const { addItem, deleteItem, addCount, subCount } = cart.actions;
export default cart.reducer;
```
</details>

<details>
<summary>🔍 Cart.js (장바구니 UI 컴포넌트 일부) 펼치기</summary>

```javascript
export default function Cart() {  
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);

  // 전체 선택 체크박스 핸들러
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setSelectedIds(cart.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  // 개별 선택 체크박스 핸들러
  const handleCheck = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // 선택 상품 일괄 삭제
  const handleDeleteSelected = () => {
    selectedIds.forEach((id) => dispatch(deleteItem(id)));
    setSelectedIds([]);
  };

  // 선택 상품 찜 목록(Wish) 이동
  const handleWishSelected = () => {
    const selectedItems = cart.filter((item) => selectedIds.includes(item.id));
    selectedItems.forEach((item) => dispatch(addWish(item)));
    setSelectedIds([]);
  };

  // Array.prototype.reduce()를 활용한 실시간 장바구니 금액 연산
  const totalCount = cart.reduce((total, item) => total + item.count, 0);
  const totalOriginalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
  const totalDiscount = cart.reduce((total, item) => total + (item.price * (item.discountRate / 100)) * item.count, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * (1 - item.discountRate / 100)) * item.count, 0);
  const totalPoint = cart.reduce((total, item) => total + item.price * 0.05 * item.count, 0);

  return (
    // ... JSX 마크업 및 테이블 렌더링 로직 생략 ...
    <Wrapper></Wrapper>
  );
}
```
</details>

#### 💡 셀프 코드리뷰 & 배운 점
* **비즈니스 로직 연산 효율화**: 장바구니 상품의 수량과 가격, 할인 금액, 적립 포인트 등을 한 번에 계산하기 위해 `reduce`를 활용했습니다. 상품의 수량이나 상태가 바뀔 때마다 계산된 값이 화면에 바로 반영되는 것을 구현하면서, React에서 데이터와 UI가 연결되는 방식을 이해할 수 있었습니다.

* **복잡한 다중 체크박스 상태 제어**: 전체 선택 기능과 개별 선택 상태의 연동을 구현하기 위해 로컬 상태 `selectedIds` 배열을 두고 처리했습니다. `checked={cart.length > 0 && selectedIds.length === cart.length}` 조건을 적용하여 데이터와 UI 상태가 양방향으로 어긋나지 않도록 정밀하게 바인딩했습니다.

* **Redux Toolkit의 편의성 체감**: Redux Toolkit을 적용하면서 `createSlice`를 사용해 상태를 관리하는 방법을 익혔습니다. `state.push()`나 `state.splice()`처럼 배열을 직접 수정하는 방식으로 작성해도 Immer가 불변성을 관리해 준다는 것을 알게 되었고, 기존 Redux보다 간결하게 상태 관리 로직을 작성할 수 있다는 점을 배웠습니다.

* **앞으로의 보완점**: 현재 `subCount`에서 수량이 음수가 되지 않도록 방어 코드를 적용했습니다. 앞으로는 수량이 0이 되었을 때 상품을 자동으로 삭제하거나, 최소 수량을 1개로 제한하는 방식으로 사용자 입장에서 더 편리하게 사용할 수 있도록 개선해 보고 싶습니다.
또한 선택한 상품을 한 번에 삭제할 때 여러 번 `dispatch`가 발생하는 부분을 개선하기 위해, 여러 상품 ID를 한 번에 처리할 수 있는 `deleteMultipleItems` 액션을 만들어 불필요한 리렌더링을 줄여볼 예정입니다.
마지막으로 상품을 선택하거나 선택 해제했을 때 선택된 상품의 수량과 금액을 기준으로 전체 금액이 바로 변경되도록 계산 로직을 보완할 예정입니다.





### 05. 도서 목록 및 상세 페이지

도서 데이터를 기반으로 신간, 베스트셀러, 추천도서 등을 분류하고
카테고리별 목록과 상세 콘텐츠를 동적으로 출력하도록 구현하였습니다.

https://github.com/user-attachments/assets/d26f547e-c6f1-4ddd-b618-2a019cfbf490

## 🖥️ 실행 결과

<img width="551" height="809" alt="image" src="https://github.com/user-attachments/assets/a48d3458-c58e-4737-b0ef-b3fab756708d" />
<img width="848" height="919" alt="image" src="https://github.com/user-attachments/assets/a4f34c6f-8443-48d9-bd83-b81171b6df61" />
<img width="669" height="923" alt="image" src="https://github.com/user-attachments/assets/0a2c19a9-2e35-4608-a69f-c6e9a6a24353" />

---

### GitHub
https://jeong-yujin-web.github.io/Minumsa/

### 회고

React를 활용하여 기존 웹사이트를 컴포넌트 단위로 구조화하며
컴포넌트 재사용과 상태 관리의 중요성을 경험할 수 있었습니다.

React Router와 Redux Toolkit을 활용하면서
SPA의 페이지 이동과 전역 상태 관리 방식을 이해하고 적용할 수 있었습니다.

앞으로는 컴포넌트 구조와 데이터 설계를 더욱 체계화하고,
사용성과 접근성을 함께 고려하는 프론트엔드 개발을 이어가고자 합니다.
