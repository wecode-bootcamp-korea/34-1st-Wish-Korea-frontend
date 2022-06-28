import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const regex = /[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g;
  const isInputIdValid = userId && !regex.test(userId);
  const regex2 = /[0-9]/gi;
  const regex3 = /[a-z]/gi;
  const isInputPwValid =
    regex.test(userPw) && regex2.test(userPw) && regex3.test(userPw);
  const inputId = e => {
    setUserId(e.target.value);
  };
  const inputPw = e => {
    setUserPw(e.target.value);
  };

  return (
    <div className="login">
      <div className="header">로그인</div>
      <div className="loginInput">
        <form className="inputForm">
          <input
            className="identification"
            type="text"
            placeholder="아이디"
            onChange={inputId}
          />

          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={inputPw}
          />

          <div className="identificationSave">
            <input type="checkbox" />
            <label>아이디 저장</label>
          </div>
          <input
            className="loginButton"
            type="submit"
            value="로그인"
            disabled={!isInputIdValid || !isInputPwValid}
          />
          <div className="link">회원가입 | 아이디 찾기 | 비밀번호 찾기 |</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
