import React from 'react';
import './Footer.scss';

const Footer = () => {
  const TITLE_LIST = [
    { id: 1, title: '스카우트' },
    { id: 2, title: '회사소개' },
    { id: 3, title: '개인정보처리방침' },
    { id: 4, title: '영상정보관리지침' },
    { id: 5, title: '이용약관' },
    { id: 6, title: '고객센터' },
  ];

  const COPY_LIST = [
    {
      id: 1,
      text: '서울특별시 강남구 테헤란로 427 위코드 | 운영자: 주식회사 위시코리아',
    },
    { id: 2, text: '대표이사 : 정진관(Backend Developer)' },
    { id: 3, text: '사업자 등록번호:523-34-20226' },
    { id: 4, text: '통신판매업 신고번호 : 2022-안중영-02857' },
    { id: 5, text: '개인정보보호책임자 : 정예지' },
  ];

  return (
    <footer className="footer">
      <div className="footIcon">
        <p className="icon">
          <img src="./images/footImg.png" alt="img" />
        </p>
      </div>
      {/*footIcon*/}
      <div className="footInfo">
        <div className="footTitle">
          <h1 className="footLogo">WISH</h1>
          <ul className="footList">
            {TITLE_LIST.map((ele, idx) => {
              return <li key={idx}>{ele.title}</li>;
            })}
          </ul>
        </div>
        {/*footTitle*/}
        <div className="footBox">
          <div className="innerBox">
            <div className="center">
              <p className="text1">
                고객센터 &nbsp;&nbsp;<a href="tel:01030953414">010-3095-3414</a>
              </p>
              <a
                href="mailto:hyerim3414@gmail.com"
                title="hyerim3414@gmail.com"
                className="email"
              >
                hyerim3414@gmail.com
              </a>
              <p className="text2">
                상담전화 13:00~16:00(평일)
                <br />
                상담톡 10:00~16:00(평일)
              </p>
            </div>
            {/*center*/}
            <div className="present">
              <p className="text1">
                기업선물 &nbsp;&nbsp;<a href="tel:01098743299">010-9874-3299</a>
              </p>
              <a
                href="mailto:305243@naver.com"
                title="305243@naver.com"
                className="email"
              >
                305243@naver.com
              </a>
              <p className="text2">상담전화 13:00~16:00(평일)</p>
            </div>
            {/*present*/}
          </div>
          {/*innerBox */}
          <ul className="footCopy">
            {COPY_LIST.map((el, i) => {
              return <li key={i}>{el.text}</li>;
            })}
            <p className="copy">
              COPYRIGHT &copy; WISH KOREA CO.LTD.ALL RIGHTS RESERVED
            </p>
          </ul>
          {/*footCopy*/}
        </div>
        {/*footBox*/}
      </div>
      {/*footInfo*/}
    </footer>
  );
};

export default Footer;
