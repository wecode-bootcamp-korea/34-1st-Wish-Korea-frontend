import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isMyHovering, setIsMyHovering] = useState(false);

  useEffect(() => {
    fetch('/data/Nav.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategoryList(data);
      });
  }, []);

  return (
    <div className="navBox">
      <div className="navLogo">
        <Link to="/" className="logo">
          WISH
        </Link>
      </div>
      <ul className="navTitle">
        <li className="navProduct">
          <Link to="/list" onMouseOver={() => setIsHovering(true)}>
            제품
          </Link>
          <div
            className="navCateTitle"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            {isHovering && (
              <div className="navInner">
                {categoryList.map(el => {
                  return (
                    <div key={el.id} className="cateTitle">
                      <h1 className="title">{el.name}</h1>
                      {el.category.map((ele, i) => {
                        return (
                          <p key={i} className="cateList">
                            {ele.name}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
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
            onMouseOver={() => setIsMyHovering(true)}
          />
          {isMyHovering && (
            <ul className="myBox">
              <li className="myList">
                <Link to="/login" className="goToMy">
                  로그인
                </Link>
              </li>
              <li className="myList" onMouseOut={() => setIsMyHovering(false)}>
                <Link to="/join" className="goToMy">
                  회원가입
                </Link>
              </li>
            </ul>
          )}
        </a>
      </div>
    </div>
  );
};

export default Nav;
