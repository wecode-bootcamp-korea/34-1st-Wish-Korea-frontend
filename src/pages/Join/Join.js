import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.scss';

const Join = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPwCheck, setUserPwCheck] = useState('');
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhonenumber, setUserPhonenumber] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const USERNAME_REGEX = /^[가-힣a-zA-Z0-9]+$/;
  const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const NAMES_REGEX = /^[가-힣a-zA-Z]+$/;
  const NICK_NAME_REGEX = /^[가-힣a-zA-Z0-9]*$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const PHONE_NUMBER_REGEX = /d{3}-d{3,4}-d{4}/;

  const isInputIdValid = USERNAME_REGEX.test(userId);
  const isInputPwValid = PASSWORD_REGEX.test(userPw);
  const isInputFirstnameValid = NAMES_REGEX.test(userFirstname);
  const isInputLastnameValid = NAMES_REGEX.test(userLastname);
  const isInputNicknameValid = NICK_NAME_REGEX.test(userNickname);
  const isInputEmailValid = EMAIL_REGEX.test(userEmail);
  const isInputPhonenumberValid = PHONE_NUMBER_REGEX.test(userPhonenumber);
  const pwEqualvalid = userPw === userPwCheck;

  const inputId = e => {
    setUserId(e.target.value);
  };
  const inputPw = e => {
    setUserPw(e.target.value);
  };
  const inputFirstname = e => {
    setUserFirstname(e.target.value);
  };
  const inputLastname = e => {
    setUserLastname(e.target.value);
  };
  const inputNickname = e => {
    setUserNickname(e.target.value);
  };
  const inputEmail = e => {
    setUserEmail(e.target.value);
  };
  const inputPhonenumber = e => {
    setUserPhonenumber(e.target.value);
  };
  const inputAddress = e => {
    setUserAddress(e.target.value);
  };
  const passwordCheck = e => {
    setUserPwCheck(e.target.value);
  };

  const SIGN_ERROR_MESSAGE = {
    'Duplicated email': '중복된 email입니다',
    'Duplicated phone number': '중복된 phone number입니다',
    'Invalid Username': '부적절한 Username입니다',
    'Invalid Nick Name': 'Nick Name입니다',
    'Invalid Last Name': '부적절한 Last Name입니다',
    'Invalid First Name': '부적절한 First Name입니다',
    'Invalid Email': '부적절한 Email입니다',
    'Invalid Password': '부적절한 Password입니다',
    'Invalid PhoneNumber': '부적절한 PhoneNumber입니다',
  };
  const clickBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="join">
      <div className="joinTitle">
        <h1>JOIN US</h1>
      </div>
      <div className="termsAgreement">
        <div className="agreementTitle">
          <h3>약관동의</h3>
        </div>
        <form className="agreementLists">
          <div className="allAgreement">
            <input
              type="checkbox"
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            />
            <label>
              러쉬코리아의 모든 약관을 확인하고
              전체동의합니다.(전체동의,선택항목도 포함됩니다.)
            </label>
          </div>
          <div className="viewAgreement">
            <input type="checkbox" checked={isChecked} onChange={() => {}} />
            <label>(필수)이용약관 전체보기</label>
          </div>
          <div className="terms">
            LUSH 웹사이트에 오신 것을 환영합니다.
            <br />
            <br />
            제 1 조 (목적)
            <br />
            <br />
            가입하시기 전에 아래의 이용약관을 반드시 읽어보시기 바랍니다. 본
            약관은 ㈜러쉬코리아(이하 ’러쉬’라 합니다)가 운영하는 러쉬 온라인몰
            사이트(www.lush.co.kr 이하 ‘사이트’라 합니다)와 사이트 관련 각종
            서비스(이하 '서비스'라 합니다) 를 이용함에 있어 러쉬와 이용자간에
            러쉬가 제공하는 모든 서비스의 이용조건 및 절차에 관한 기본적인
            사항을 규정하는데 목적이 있습니다.
            <br />
            <br />
            ※ 「PC통신, 무선 등을 이용하는 전자거래에 대해서도 그 성질에 반하지
            않는 한 이 약관을 준용합니다」
            <br />
            <br />
            제 2 조 (용어의 정의)
            <br />
          </div>
          <div className="necessaryInformation">
            <input type="checkbox" checked={isChecked} onChange={() => {}} />
            <label>(필수)개인정보 수집 및 이용 전체보기</label>
          </div>
          <div className="terms">
            1. ‘사이트’란 러쉬에서 컴퓨터 등 정보 통신 설비와 정보 통신망을
            이용하여 정보 및 서비스를 이용자에게 제공하고 재화 또는 용역(이하
            “재화 등”이라 함)을 거래할 수 있도록 설정한 가상의 영업장을
            말합니다.
            <br />
            <br />
            2. ‘이용자’란 본 약관을 따라 러쉬가 제공하는 서비스를 받는 회원 및
            비회원을 말합니다.
            <br />
            <br />
            3. ‘회원’이란 러쉬의 사이트를 통해 본 약관에서 정의하고 있는 가입
            절차에 따라 회원가입하여 정상적으로 서비스를 이용할 수 있는 권한을
            부여 받은 고객을 말합니다. <br />
            <br />
            4. ‘사이트’란 러쉬에서 컴퓨터 등 정보 통신 설비와 정보 통신망을
            이용하여 정보 및 서비스를 이용자에게 제공하고 재화 또는 용역(이하
            “재화 등”이라 함)을 거래할 수 있도록 설정한 가상의 영업장을
            말합니다. 2. ‘이용자’란 본 약관을 따라 러쉬가 제공하는 서비스를 받는
            회원 및 비회원을 말합니다.
          </div>
          <div className="optionalInformation">
            <input type="checkbox" checked={isChecked} onChange={() => {}} />
            <label>(선택)개인정보 수집 및 이용 전체보기</label>
          </div>
          <div className="terms">
            1. ‘비회원’이라 함은 회원으로 가입하지 않고 러쉬가 제공하는 정보 및
            서비스를 이용하는 자를 말합니다.
            <br />
            <br />
            2. ‘러쉬 스카우트’란 러쉬가 회원에게 제공하는 멤버십 서비스를
            말합니다.
            <br />
            <br />
            3. ‘러쉬덕찌’(이하 ‘덕찌’라 합니다)란 러쉬스카우트의 일종으로 러쉬가
            회원에게 제공하는 뱃지 또는 그 뱃지와 관련한 서비스를 말합니다.
            <br />
            <br />
            4. ‘사이트’란 러쉬에서 컴퓨터 등 정보 통신 설비와 정보 통신망을
            이용하여 정보 및 서비스를 이용자에게 제공하고 재화 또는 용역(이하
            “재화 등”이라 함)을 거래할 수 있도록 설정한 가상의 영업장을
            말합니다.
            <br />
            <br />
            5. ‘이용자’란 본 약관을 따라 러쉬가 제공하는 서비스를 받는 회원 및
            비회원을 말합니다.
            <br />
            <br />
            6. ‘회원’이란 러쉬의 사이트를 통해 본 약관에서 정의하고 있는 가입
            절차에 따라 회원가입하여 정상적으로 서비스를 이용할 수 있는 권한을
            부여 받은 고객을 말합니다.
          </div>
        </form>
      </div>
      <div className="userInformation">
        <div className="informationTitle">
          <h3>기본정보</h3>
          <p>
            <span className="must">*</span>표시는 반드시 입력하셔야 하는
            항목입니다.
          </p>
        </div>
        <div className="tableForm">
          <table className="userInformationTable">
            <colgroup>
              <col />
            </colgroup>
            <tbody className="userInformationTbody">
              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 아이디
                </th>
                <td className="inputbox">
                  <div className="information">
                    <input type="text" className="text" onChange={inputId} />
                  </div>
                </td>
                {userId && !isInputIdValid && (
                  <td>* 한글, 영문, 숫자만 입력 가능합니다.</td>
                )}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 비밀번호
                </th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="password"
                      className="text"
                      onChange={inputPw}
                    />
                  </div>
                </td>
                {!isInputPwValid && (
                  <td>* 영문,숫자,특수문자를 조합하여 8자리상 입력해주세요</td>
                )}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">&nbsp;&nbsp;비밀번호 확인</th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="password"
                      className="text"
                      onChange={passwordCheck}
                    />
                  </div>
                </td>
                {!pwEqualvalid && <td>* 비밀번호가 일치하지 않습니다</td>}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 성
                </th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="text"
                      className="text"
                      maxLength="30"
                      onChange={inputFirstname}
                    />
                  </div>
                </td>
                {userFirstname && !isInputFirstnameValid && (
                  <td>* 특수문자는 사용하실 수 없습니다</td>
                )}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 이름
                </th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="text"
                      className="text"
                      maxLength="30"
                      onChange={inputLastname}
                    />
                  </div>
                </td>
                {userLastname && !isInputLastnameValid && (
                  <td>* 특수문자는 사용하실 수 없습니다</td>
                )}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">&nbsp;&nbsp;닉네임</th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="text"
                      className="text"
                      maxLength="20"
                      onChange={inputNickname}
                    />
                  </div>
                </td>
                {userNickname && !isInputNicknameValid && (
                  <td>* 특수문자는 사용하실 수 없습니다</td>
                )}
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 이메일
                </th>
                <td className="inputbox">
                  <div className="email">
                    <div className="information">
                      <input
                        type="text"
                        className="text"
                        onChange={inputEmail}
                      />
                    </div>
                  </div>
                </td>
                {userEmail && !isInputEmailValid && (
                  <td>* @를 제외한 특수문자는 사용할 수 없습니다</td>
                )}
              </tr>
              <tr className="row">
                <td colSpan="2" className="inputbox">
                  <div className="receiveEvent">
                    <input type="checkbox" className="checkbox" value="y" />
                    <label>정보/이벤트 메일 수신에 동의합니다.</label>
                  </div>
                </td>
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 휴대폰번호
                </th>
                <td className="inputbox">
                  <div className="information">
                    <input
                      type="text"
                      className="text"
                      maxLength="30"
                      placeholder="-와 같이 입력하세요."
                      onChange={inputPhonenumber}
                    />
                  </div>
                </td>
                {userPhonenumber && isInputPhonenumberValid && (
                  <td>-를 포함하여 입력해주세요</td>
                )}
              </tr>
              <tr className="row">
                <td colSpan="2" className="inputbox">
                  <div className="receiveEvent">
                    <input type="checkbox" className="checkbox" value="y" />
                    <label>정보/이벤트 SMS 수신에 동의합니다.</label>
                  </div>
                </td>
              </tr>

              <tr className="row">
                <th className="inputBoxTitle">
                  <span className="must">*</span> 주소
                </th>
                <td className="inputbox">
                  <div className="post">
                    <div className="information">
                      <input
                        type="text"
                        className="text"
                        onChange={inputAddress}
                      />
                    </div>
                  </div>
                </td>
                {!userAddress && <td>* 반드시 입력해주세요</td>}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="joinButton">
          <button
            disabled={userPw !== userPwCheck || !userPw}
            onClick={e => {
              fetch('http://10.58.7.165:8000/users/signup', {
                method: 'POST',
                body: JSON.stringify({
                  username: userId,
                  password: userPw,
                  email: userEmail,
                  phone_number: userPhonenumber,
                  first_name: userFirstname,
                  last_name: userLastname,
                  nick_name: userNickname,
                  address: userAddress,
                }),
              })
                .then(response => response.json())
                .then(data => {
                  if (data.message === 'Duplicated username') {
                    alert('중복된 username입니다');
                  } else if (data.message === 'SUCCESS') {
                    alert('회원가입 되었습니다');
                    navigate('/login');
                  } else {
                    alert(SIGN_ERROR_MESSAGE[data.message]);
                  }
                })
                .catch(error => alert(error));
            }}
            className="button"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
