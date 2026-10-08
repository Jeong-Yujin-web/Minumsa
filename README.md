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
```text
로그인 성공 시 GNB에 사용자 이름을 표시하고,
로그인 상태에 따라 로그인 UI와 사용자 정보 및 로그아웃 UI가 변경되도록 구현하였습니다.
```
https://github.com/user-attachments/assets/03d369a7-4b6f-4e29-b88a-3ef3d9d2b547

### 04. Redux Toolkit을 활용한 상태 관리
```text
Redux Toolkit을 활용하여 사용자 정보와 장바구니, 찜 목록 등의 상태를
전역으로 관리하고 상품 추가·삭제 및 수량 변경 기능을 구현하였습니다.
```
https://github.com/user-attachments/assets/93952252-42b2-4b4f-bc87-47ff2cb2e95a

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

###회고

React를 활용하여 기존 웹사이트를 컴포넌트 단위로 구조화하며
컴포넌트 재사용과 상태 관리의 중요성을 경험할 수 있었습니다.

React Router와 Redux Toolkit을 활용하면서
SPA의 페이지 이동과 전역 상태 관리 방식을 이해하고 적용할 수 있었습니다.

앞으로는 컴포넌트 구조와 데이터 설계를 더욱 체계화하고,
사용성과 접근성을 함께 고려하는 프론트엔드 개발을 이어가고자 합니다.
