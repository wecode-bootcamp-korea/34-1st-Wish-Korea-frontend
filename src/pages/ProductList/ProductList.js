import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [categoryList, setCategoryList] = useState({});
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const [sort, setSort] = useState();

  useEffect(() => {
    fetch('/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategoryList(data[1]);
      });
  }, []);

  useEffect(() => {
    fetch('/data/detailsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
      });
  }, []);

  // 데이터 통신용
  // useEffect(() => {
  //   fetch('http://10.58.7.14:8000/products?category_id=3', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCategoryList(data.result);
  //     });
  // }, []);
  // console.log(categoryList);

  const goToMenu = id => {
    navigate(`/list?categoryId=${id}`); //이부분도 구현중입니다 :)
  };

  const params = new URLSearchParams(location.search);

  console.log(params.getAll('categoryId'));

  return (
    <>
      <section className="subVisual">
        <div className="img">
          <img src={details.category?.image_url} alt="sub visual" />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>{categoryList.name}</h2>
            <p>{details.category?.content}</p>
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
            <li onClick={() => goToMenu(categoryList.category_id)}>
              <p>
                전체
                <span>({categoryList.products_count})</span>
              </p>
            </li>
            {categoryList.sub_categories?.map(submenu => {
              return (
                <li
                  key={submenu.id}
                  onClick={() => goToMenu(submenu.id)}
                  className={
                    submenu.id === params.getAll('categoryId') ? 'active' : ''
                  }
                >
                  <p>
                    {submenu.name}
                    <span>({submenu.products_count})</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <ProductCard sort={sort} details={details} />
      </section>
    </>
  );
};

export default ProductList;
