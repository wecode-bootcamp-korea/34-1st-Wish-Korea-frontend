import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isMyHovering, setIsMyHovering] = useState(false);

  useEffect(() => {
    fetch('http://10.58.1.112:8000/products/categories', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategoryList(data.result);
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
          <Link to="/list?" onMouseOver={() => setIsHovering(true)}>
            제품
          </Link>
          <div
            className="navCateTitle"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            {isHovering && (
              <div className="navInner">
                {categoryList &&
                  categoryList.map(el => {
                    return (
                      <div key={el.category_id} className="cateTitle">
                        <h1 className="title">{el.name}</h1>
                        {el.sub_categories.map((ele, i) => {
                          console.log('map', ele);
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
              <Link to="/login" className="goToMy">
                <li className="myList">로그인</li>
              </Link>
              <Link to="/join" className="goToMy">
                <li
                  className="myList"
                  onMouseOut={() => setIsMyHovering(false)}
                >
                  회원가입
                </li>
              </Link>
            </ul>
          )}
        </a>
      </div>
    </div>
  );
};

export default Nav;
