# Minumsa React project

민음사 웹사이트를 React를 활용하여 리뉴얼하였습니다.

> 민음사의 브랜드 이미지를 유지하면서 콘텐츠 탐색의 편의성을 개선하고,
> React의 컴포넌트 기반 구조와 SPA의 특성을 활용하여 일관된 사용자 경험을 구현하였습니다.

## 📋 기획안

프로젝트의 기획 배경과 요구사항은 아래 문서에서 확인할 수 있습니다.

👉 [기획안 PDF 보기](./docs/기획안.pdf)

## 🖥️ 프로젝트 소개

### 개발 배경
```text
최근 독서를 취향과 자기표현의 방식으로 소비하는 ‘텍스트힙’ 문화가 확산되면서,
민음사는 고전문학을 넘어 젊고 감각적인 문화 브랜드로 자리 잡고 있습니다.

기존 민음사 사이트는 정적인 콘텐츠 중심의 구성으로 브랜드의 이미지를 충분히 보여주기 어렵다고 판단하여,
깔끔하고 세련된 디자인을 유지하면서 다양한 콘텐츠를 직관적으로 탐색할 수 있도록 리뉴얼하였습니다.
```
### 프로젝트 목표
```text
React의 컴포넌트 기반 구조를 활용하여 반복적으로 사용되는 콘텐츠 UI를 컴포넌트로 설계하고,
페이지 간 일관성을 유지하면서 콘텐츠를 효율적으로 관리할 수 있도록 구현하였습니다.

또한 React Router를 활용한 SPA 방식으로 페이지 이동의 단절을 줄이고,
사용자가 다양한 콘텐츠를 자연스럽게 탐색할 수 있도록 구현하였습니다.
```

## ✨ 주요 기능

* 메인 / 도서 / 출판사 / 커뮤니티 / 이벤트 페이지 구현
* 도서 목록 및 상세 콘텐츠 구현
* 도서 카테고리 및 유형별 콘텐츠 필터링
* 장바구니 및 찜 기능 구현
* 로그인 및 사용자 상태 관리
* React Router를 활용한 SPA 페이지 이동
* Redux Toolkit을 활용한 전역 상태 관리
* React Bootstrap을 활용한 UI 구성

## 🛠️ 기술 스택

### Markup

* HTML5
* CSS3

### Frontend

* React
* React Router
* JavaScript
* Redux Toolkit
* React Bootstrap
* Styled-components
* React Icons

### Tools

* GitHub
* Figma
* Chat GPT

## 📁 프로젝트 구조

```text
Minumsa_React
├── node_modules/
├── public/
│   ├── images/
│   ├── index.html
└── src/
    ├── components/
    ├── data/
    ├── pages/
    ├── slices/
    ├── store/
    ├── styles/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── setupTests.js
└── README.md
```

## ⭐ 주요 구현 내용

### 01. React 컴포넌트 기반 콘텐츠 UI

```text
메인페이지와 도서, 커뮤니티, 이벤트 등 여러 페이지에서 반복적으로 사용되는 UI를
React 컴포넌트로 분리하여 재사용할 수 있도록 구성하였습니다.

페이지별로 동일한 구조를 반복 작성하는 대신 공통 컴포넌트를 활용하여
디자인의 일관성을 유지하고 콘텐츠 변경에 유연하게 대응할 수 있도록 구현하였습니다.
```
https://github.com/user-attachments/assets/4dc8192a-9389-459d-8652-51df45d3b750

### 02. React Router를 활용한 SPA
```text
React Router를 활용하여 페이지별 URL을 구성하고,
전체 페이지가 새로고침되지 않는 SPA 방식의 페이지 이동을 구현하였습니다.

도서 카테고리와 도서 상세 페이지 등 콘텐츠에 따라 URL을 동적으로 구성하여
사용자가 원하는 콘텐츠로 자연스럽게 이동할 수 있도록 구현하였습니다.
```
https://github.com/user-attachments/assets/fbbad9f4-b9ae-4f7e-91bc-21d396127d03

### 03. 로그인 및 사용자 상태 관리
```text
로그인 시 입력한 사용자 정보를 확인하여 로그인 상태를 관리하고,
로그인 성공 시 GNB에 사용자 이름이 표시되도록 구현하였습니다.

로그인 상태에 따라 GNB의 로그인 UI를 사용자 정보와 로그아웃 UI로 변경하고,
로그아웃 시 다시 로그인 화면으로 전환되도록 구현하였습니다.
```
https://github.com/user-attachments/assets/03d369a7-4b6f-4e29-b88a-3ef3d9d2b547

### 04. Redux Toolkit을 활용한 상태 관리
```text
Redux Toolkit을 활용하여 로그인 사용자 정보와 장바구니, 찜 목록 등의 상태를 전역에서 관리하였습니다.

페이지가 이동하더라도 필요한 상태를 유지할 수 있도록 구성하고,
장바구니 상품 수량 변경 및 찜 목록 추가·삭제 등의 기능을 구현하였습니다.
```

https://github.com/user-attachments/assets/93952252-42b2-4b4f-bc87-47ff2cb2e95a

### 05. 도서 목록 및 상세 페이지

```text
도서 데이터를 기반으로 신간, 베스트셀러, 추천도서 등을 분류하고
카테고리별 목록과 상세 콘텐츠를 동적으로 출력하도록 구현하였습니다.
```
https://github.com/user-attachments/assets/d26f547e-c6f1-4ddd-b618-2a019cfbf490

## 🖥️ 실행 결과

<img width="551" height="809" alt="image" src="https://github.com/user-attachments/assets/a48d3458-c58e-4737-b0ef-b3fab756708d" />
<img width="848" height="919" alt="image" src="https://github.com/user-attachments/assets/a4f34c6f-8443-48d9-bd83-b81171b6df61" />
<img width="669" height="923" alt="image" src="https://github.com/user-attachments/assets/0a2c19a9-2e35-4608-a69f-c6e9a6a24353" />

---
### GitHub

👉 https://github.com/Jeong-Yujin-web/Minumsa

### 배포 사이트

👉 https://jeong-yujin-web.github.io/Minumsa/

### 💭 회고

React를 활용하여 기존 웹사이트를 컴포넌트 단위로 구조화하면서
재사용 가능한 컴포넌트 설계와 데이터 관리의 중요성을 경험할 수 있었습니다.

특히 React Router와 Redux Toolkit을 활용해 페이지 이동과 전역 상태를 관리하면서
SPA 구조에서 콘텐츠와 상태를 효율적으로 관리하는 방법을 학습할 수 있었습니다.

앞으로는 컴포넌트의 재사용성과 데이터 구조를 더욱 체계적으로 설계하고,
사용성과 접근성을 함께 고려한 프론트엔드 개발을 이어가고자 합니다.
