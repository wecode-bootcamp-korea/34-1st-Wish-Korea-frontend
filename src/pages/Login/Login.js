import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <h3>로그인</h3>
      </div>
      <div className="membership">
        <p className="member">회원</p>
        <p className="nonMember">비회원</p>
      </div>
      <div className="loginInput">
        <form>
          <p>
            <input className="identification" />
          </p>
          <p>
            <input className="password" />
          </p>
          <p>
            <button className="identificationSave" />
          </p>
          <p>
            <input type="button" className="loginButton" />
          </p>
          <footer>
            <p>회원가입 | 아이디 찾기 | 비밀번호 찾기 |</p>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Login;
