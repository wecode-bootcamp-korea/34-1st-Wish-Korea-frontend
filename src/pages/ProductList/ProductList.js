import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';

const ProductList = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  }, []);
  console.log(List);

  return (
    <div>
      <section className="subVisual">
        <div className="img">
          <img src="./images/vs1.jpg" alt="sub visual" />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>배쓰 밤</h2>
            <p>찬란히 빛나는 물결에 부드럽게 몸을 맡겨 보세요</p>
          </div>
        </div>
      </section>
      <section className="subContent">
        <div className="subTitle">
          <h3>배쓰 밤</h3>
          <div className="sort">
            <select>
              <option value="추천순" key="">
                추천순
              </option>
              <option value="판매인기순" key="">
                판매인기순
              </option>
              <option value="낮은가격순" key="">
                낮은가격순
              </option>
              <option value="높은가격순" key="">
                높은가격순
              </option>
              <option value="리뷰많은순" key="">
                리뷰많은순
              </option>
              <option value="신제품순" key="">
                신제품순
              </option>
            </select>
          </div>
        </div>
        <div className="subMenu">
          <ul>
            {SUB_MENU_LIST.map(submenu => {
              return (
                <li key={submenu.id}>
                  <a href="#">
                    {submenu.menuName}
                    <span>({submenu.quantity})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="productList">
          <ul>
            <li>
              <Link to="/view">
                <div className="thumb">
                  <div className="img">
                    <img src="./images/list_img2.jpg" alt="thumb img" />
                  </div>
                </div>
                <div className="icons">
                  <span className="iconNew">NEW</span>
                  <span className="iconVegan">VEGAN</span>
                  <span className="iconOnline">온라인전용</span>
                  <span className="iconLocal">국내제조</span>
                </div>
                <div className="title">
                  <h4>라이트 더 나이트</h4>
                  <span className="shotdesc">#배쓰밤 #EID</span>
                </div>
                <div className="price">￦ 19,000</div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProductList;

const SUB_MENU_LIST = [
  {
    id: 1,
    menuName: '전체',
    quantity: 75,
  },
  {
    id: 2,
    menuName: '배쓰 밤',
    quantity: 34,
  },
  {
    id: 3,
    menuName: '버블 바',
    quantity: 38,
  },
  {
    id: 4,
    menuName: '배쓰 오일',
    quantity: 1,
  },
  {
    id: 5,
    menuName: '펀',
    quantity: 2,
  },
];

const PRODUCT_LIST = [];
