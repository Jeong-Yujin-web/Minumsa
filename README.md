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

💡 셀프 코드리뷰
* useState, Redux 활용 - 로그인 상태 및 사용자 이름 관리
* getCookie(), setCookie(), deleteCookie() 활용 - 아이디 저장 기능 구현
#### ✅ 로그인 성공 여부를 확인한 후 쿠키 처리하기

<br><br>

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

<br><br>

### 04. Redux Toolkit을 활용한 상태 관리
Redux Toolkit을 활용하여 사용자 정보와 장바구니, 찜 목록 등의 상태를 전역으로 관리하고 상품 추가·삭제 및 수량 변경 기능을 구현하였습니다.

https://github.com/user-attachments/assets/93952252-42b2-4b4f-bc87-47ff2cb2e95a

#### 💻 핵심 코드 보기

💡 셀프 코드리뷰
* Redux Toolkit의 createSlice 활용 - 장바구니 상품 추가·삭제 및 수량 관리 구현
* reduce() 활용 - 상품 수량, 할인 금액, 최종 결제 금액 실시간 계산
#### ✅ 선택 상품 일괄 삭제 기능을 별도 Reducer로 분리하고, 수량 변경 및 할인 금액 계산의 예외 처리 보완

<br><br>

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

<br><br>

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
