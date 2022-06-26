import React from 'react';
import './Join.scss';

const Join = () => {
  return (
    <div className="join">
      <div className="joinTitle">
        <h2>JOIN US</h2>
      </div>
      <div className="allAgreement">
        <div className="agreementTitle">
          <h3>약관동의</h3>
        </div>
        <form className="agreementLists">
          <div>
            <input type="checkbox" />
            <label>
              러쉬코리아의 모든 약관을 확인하고
              전체동의합니다.(전체동의,선택항목도 포함됩니다.)
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label>(필수)이용약관 전체보기</label>
          </div>
          <div class="terms">
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
          <div>
            <input type="checkbox" />
            <label>(필수)개인정보 수집 및 이용 전체보기</label>
          </div>
          <div class="terms">
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
            부여 받은 고객을 말합니다.
          </div>
          <div>
            <input type="checkbox" />
            <label>(선택)개인정보 수집 및 이용 전체보기</label>
          </div>
          <div class="terms">
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
            부여 받은 고객을 말합니다.
          </div>
        </form>
      </div>
      <div className="userInfomation">ddd</div>
    </div>
  );
};

export default Join;
