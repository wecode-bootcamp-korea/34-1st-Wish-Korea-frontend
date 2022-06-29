import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isMyHovering, setIsMyHovering] = useState(false);

  useEffect(() => {
    fetch('http://10.58.2.87:8000/products/categories', {
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
        <li
          className="navProduct"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          제품
          <div className="navCateTitle">
            {isHovering && (
              <div className="navInner">
                {categoryList.map(category => {
                  const { category_id, name, sub_categories } = category;

                  return (
                    <div key={category_id} className="cateTitle">
                      <Link to={`/list?category_id=${category_id}`}>
                        <h1 className="title">{name}</h1>
                      </Link>
                      {sub_categories.map(subCategory => {
                        return (
                          <Link
                            to={`/list?category_id=${category_id}&sub_category_id=${subCategory.id}`}
                            key={subCategory.id}
                          >
                            <p className="cateList">{subCategory.name}</p>
                          </Link>
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
        <span className="search">
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_search.png"
            alt="search"
          />
        </span>
        <Link to="/cart">
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_cart.png"
            alt="cart"
          />
          {/* <span className="count">0</span> */}
        </Link>
        <span
          className="user"
          onMouseOver={() => setIsMyHovering(true)}
          onMouseOut={() => setIsMyHovering(false)}
        >
          <img
            src="https://www.lush.co.kr/data/skin/front/howling/_msc/images/header/icon_top_mypage.png"
            alt="mypage"
          />
          {isMyHovering && (
            <ul className="myBox">
              {localStorage.getItem('Authorization') ? (
                <Link
                  to="/"
                  className="goToMy"
                  onClick={() => {
                    localStorage.removeItem('Authorization');
                  }}
                >
                  <li className="myList">로그아웃</li>
                </Link>
              ) : (
                <Link to="/login" className="goToMy">
                  <li className="myList">로그인</li>
                </Link>
              )}
              <Link to="/join" className="goToMy">
                <li className="myList">회원가입</li>
              </Link>
            </ul>
          )}
        </span>
      </div>
    </div>
  );
};

export default Nav;
