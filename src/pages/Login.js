import { useEffect, useState } from 'react';
import { SiNaver } from 'react-icons/si';
import { FaApple, FaGoogle } from 'react-icons/fa';
import styled from 'styled-components';
import userList from '../data/users';

const Wrapper = styled.div`
  width: 500px;
  margin: 100px auto;
  text-align: center;
  .title {
    margin-bottom: 20px;
  }
  > p {
    margin: 5px 0;
    color: #666;
    font-size: 14px;
  }
`;
const Form = styled.form`
  width: 300px;
  margin: 40px auto 0;
`;
const FieldLabel = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 8px;
  font-size: 14px;
`;
const FieldInput = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #6287E5;
  }
`;
const MoreRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;
const SmallLabel = styled.label`
  font-size: 0.8rem;
`;
const FindLinks = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #666;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      color: #6287E5;
    }
  }
`;
const Divider = styled.span`
  margin: 0 5px;
  color: #999 !important;
  cursor: default !important;
`;
const SubmitButton = styled.button`
  display: block;
  width: 230px;
  height: 50px;
  margin: 30px auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #6287E5;
  color: white;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #eff4ff;
    color: #6287E5;
  }
`;
const SignupText = styled.div`
  font-size: 14px;
  color: #666;
  span:last-child {
    margin-left: 10px;
    color: #666;
    border-bottom: 1px solid #666;
    cursor: pointer;
    &:hover {
      color: #6287E5;
      border-bottom-color: #6287E5;
    }
  }
`;
const LoginBtn = styled.button`
  width: 230px;
  height: 50px;
  margin: 10px;
  padding: 0;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${props => props.$bg};
  cursor: pointer;
  &:hover {
    background-color: #eff4ff;
    p {
      color: #6287E5;
    }
    svg {
      fill: #6287E5;
    }
  }
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    svg {
      width: 20px;
      fill: #fff;
    }
    p {
      margin: 0 0 0 10px;
      color: white;
    }
  }
`;

export default function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [saveId, setSaveId] = useState(false);

  const getCookie = (key) => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(key + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
  };

  const setCookie = (key, value, day) => {
    const date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = `${key}=${encodeURIComponent(value)};expires=${date.toGMTString()}`;
  };

  const deleteCookie = (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

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

    if (saveId) {
      setCookie('key', userId, 3);
    } else {
      deleteCookie('key');
    }

    if (user) {
      alert(`${user.name}님 로그인 성공`);
      window.location.href = `${process.env.PUBLIC_URL}/`;
    } else {
      if (!saveId) setUserId('');
      setUserPw('');
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <Wrapper>
      <h3 className="title">로그인</h3>
      <p>로그인 하시면 도서 리뷰 등록 및 내가 찜한 도서와 포인트 적립 등의</p>
      <p>다양한 이벤트와 기능을 사용하실 수 있습니다.</p>
      <Form onSubmit={handleSubmit}>
        <FieldLabel htmlFor="userId">아이디</FieldLabel>
        <FieldInput type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} autoComplete="username" />
        <FieldLabel htmlFor="userPw">비밀번호</FieldLabel>
        <FieldInput type="password" id="userPw" value={userPw} onChange={(e) => setUserPw(e.target.value)} autoComplete="current-password" />
        <MoreRow>
          <div>
            <input type="checkbox" id="id_save" checked={saveId} onChange={(e) => setSaveId(e.target.checked)} />
            <SmallLabel htmlFor="id_save">아이디 저장</SmallLabel>
          </div>
          <FindLinks>
            <span>아이디 찾기</span>
            <Divider>|</Divider>
            <span>비밀번호 찾기</span>
          </FindLinks>
        </MoreRow>
        <SubmitButton type="submit">로그인</SubmitButton>
        <SignupText>
          <span>아직 민음사 회원이 아니신가요?</span>
          <span>회원가입</span>
        </SignupText>
      </Form>
      <div className="naver">
        <LoginBtn $bg="#03C75A">
          <a href="https://nid.naver.com/nidlogin.login">
            <SiNaver />
            <p>네이버로 시작하기</p>
          </a>
        </LoginBtn>
      </div>
      <div className="apple">
        <LoginBtn $bg="#000">
          <a href="https://account.apple.com/">
            <FaApple />
            <p>애플로 시작하기</p>
          </a>
        </LoginBtn>
      </div>
      <div className="google">
        <LoginBtn $bg="#ddd">
          <a href="https://accounts.google.com/">
            <FaGoogle />
            <p>구글로 시작하기</p>
          </a>
        </LoginBtn>
      </div>
    </Wrapper>
  );
}