import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [categoryList, setCategoryList] = useState({});
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const [sort, setSort] = useState();

  // useEffect(() => {
  //   fetch('/data/listData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCategoryList(data[1]);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('/data/detailsData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails(data);
  //     });
  // }, []);

  const params = new URLSearchParams(location.search);

  const mainLink = params.get('category_id');
  const subLink = params.get('sub_category_id');

  // 데이터 통신용
  useEffect(() => {
    fetch('http://10.58.2.87:8000/products/categories', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        data.result.map(item => {
          if (item.category_id === Number(mainLink)) setCategoryList(item);
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.2.87:8000/products?category_id=${mainLink}${
        subLink ? `&sub_category_id=${subLink}` : ''
      }`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setDetails(data.result);
      });
  }, [location.search]);

  const goToMenu = id => {
    navigate(`/list?category_id=${id}`);
  };

  if (Object.keys(categoryList).length === 0) return <>Loding..</>;

  let subIndex = 0;
  if (subLink && Object.keys(categoryList).length) {
    categoryList.sub_categories.map((el, index) => {
      if (el.id == subLink) {
        subIndex = index;
      }
    });
  }

  return (
    <>
      <section className="subVisual">
        <div className="img">
          <img
            src={`${
              !subLink
                ? categoryList.image_url
                : categoryList.sub_categories[subIndex]?.image_url
            }`}
            alt="sub visual"
          />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>{`${
              !subLink
                ? categoryList.name
                : categoryList.sub_categories[subIndex]?.name
            }`}</h2>
            <p>{`${
              !subLink
                ? categoryList.content
                : categoryList.sub_categories[subIndex]?.content
            }`}</p>
          </div>
        </div>
      </section>
      <section className="subContent">
        <div className="subTitle">
          <h3>{categoryList.name}</h3>
          <div className="sort">
            <select
              onChange={e => {
                setSort(e.target.value);
              }}
            >
              <option value="recommend">추천순</option>
              <option value="popularity">판매인기순</option>
              <option value="lowprice">낮은가격순</option>
              <option value="highprice">높은가격순</option>
              <option value="newproduct">신제품순</option>
            </select>
          </div>
        </div>
        <div className="subMenu">
          <ul>
            <li
              className={`${!subLink ? 'active' : ''}`}
              onClick={() => goToMenu(categoryList.category_id)}
            >
              <Link to={`/list?category_id=${mainLink}`}>
                전체
                <span>({categoryList.products_count})</span>
              </Link>
            </li>
            {categoryList.sub_categories?.map(submenu => {
              return (
                <li
                  key={submenu.id}
                  className={
                    submenu.id === Number(params.get('sub_category_id'))
                      ? 'active'
                      : ''
                  }
                >
                  <Link
                    to={`/list?category_id=${mainLink}&sub_category_id=${submenu.id}`}
                  >
                    {submenu.name}
                    <span>({submenu.products_count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {details.products.length === 0 ? (
          <div className="noList">내용이 없습니다.</div>
        ) : (
          <ProductCard sort={sort} details={details} />
        )}
      </section>
    </>
  );
};

export default ProductList;
