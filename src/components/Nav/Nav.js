import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [navCategory, setNavCategory] = useState([]);
  const [isHovering, setIsHovering] = useState(0);

  useEffect(() => {
    fetch('./data/Nav.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNavCategory(data);
      });
  }, []);

  return (
    <div className="navBox">
      <div className="navLogo">WISH</div>
      <ul className="navTitle">
        <li className="navProduct">
          <Link
            to="/list"
            onMouseOver={() => setIsHovering(1)}
            // onMouseOut={() => setIsHovering(0)}
          >
            제품
          </Link>
          <div className="navCateTitle">
            {isHovering ? (
              <>
                {navCategory.map(el => {
                  return (
                    <div key={el.id} className="cateTitle">
                      <h1 className="title">{el.name}</h1>
                      {el.category.map((ele, i) => {
                        return (
                          <p
                            key={i}
                            className="cateList"
                            onMouseOver={() => setIsHovering(1)}
                            onMouseOut={() => setIsHovering(0)}
                          >
                            {ele.name}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            ) : (
              ''
            )}
          </div>
        </li>
        <li>러쉬 소개</li>
        <li>매장 안내</li>
        <li>스파</li>
        <li>이벤트</li>
      </ul>
      <div className="navIcon">
        <a href="#">
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_search.png"
            alt="search"
          />
        </a>
        <Link to="/cart">
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_cart.png"
            alt="cart"
          />
          <span className="count">0</span>
        </Link>
        <a href="#">
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_mypage.png"
            alt="mypage"
            onMouseOver={() => setIsHovering(1)}
          />
          {isHovering ? (
            <ul className="myBox">
              <li Link to="/login" className="myList">
                로그인
              </li>
              <li
                Link
                to="/join"
                className="myList"
                onMouseOut={() => setIsHovering(0)}
              >
                회원가입
              </li>
            </ul>
          ) : (
            ''
          )}
          {/* <ul className="myBox">
            <li Link to="/login" className="myList">
              로그인
            </li>
            <li Link to="/join" className="myList">
              회원가입
            </li>
          </ul> */}
        </a>
      </div>
    </div>
  );
};

export default Nav;
