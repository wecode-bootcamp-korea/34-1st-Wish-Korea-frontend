import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const USERNAME_REGEX = /^[가-힣a-zA-Z0-9]+$/;
  const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/;
  // const isInputPwValid = userPw.includes('$@$!%*#?&') && userPw.length >= 8;

  const isInputIdValid = USERNAME_REGEX.test(userId);
  const isInputPwValid = PASSWORD_REGEX.test(userPw);

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
            className="userInput"
            type="text"
            placeholder="아이디"
            onChange={inputId}
          />

          <input
            className="userInput"
            type="password"
            placeholder="비밀번호"
            onChange={inputPw}
          />

          <div className="identificationSave">
            <input type="checkbox" />
            <label>아이디 저장</label>
          </div>
          <input
            className="userInput"
            type="submit"
            value="로그인"
            disabled={!isInputIdValid || !isInputPwValid}
            onClick={e => {
              e.preventDefault();
              fetch('http://10.58.2.87:8000/users/signin', {
                method: 'POST',
                body: JSON.stringify({
                  username: userId,
                  password: userPw,
                }),
              })
                .then(response => response.json())
                .then(data => {
                  console.log('결과', data);
                  localStorage.setItem('Authorization', data.token);
                  navigate('/');
                })
                .catch(error => console.log(error));
            }}
          />
          <div className="userInput">
            회원가입 | 아이디 찾기 | 비밀번호 찾기 |
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
