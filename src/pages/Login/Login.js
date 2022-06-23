import React, { useState } from 'react';
import './Login.scss';
const Login = () => {
  const [values, setValues] = useState('');
  const [pwValues, setPwValues] = useState('');
  const getValue = e => {
    setValues(e.target.value);
  };

  const getPwValue = e => {
    setPwValues(e.target.value);
  };
  console.log(values);
  console.log(pwValues);
  //잘모르겠어서 일단씀. 개발중

  return (
    <div className="login">
      <div className="header">로그인</div>
      <div className="loginInput">
        <form className="inputForm">
          <input
            className="identification"
            type="text"
            placeholder="아이디"
            onChange={getValue}
          />

          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={getPwValue}
          />

          <div className="identificationSave">
            <input type="checkbox" />
            <label>아이디 저장</label>
          </div>
          <input className="loginButton" type="button" value="로그인" />
          <div className="link">회원가입 | 아이디 찾기 | 비밀번호 찾기 |</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
