import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [categoryList, setCategoryList] = useState({});
  const [searchParams, setSearchParams] = useSearchParams(); //이부분은 구현중입니다 :)
  const navigate = useNavigate();

  const [sort, setSort] = useState();

  useEffect(() => {
    fetch('/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log('111', data);
        setCategoryList(data[0]);
      });
  }, []);

  const goToMenu = () => {
    navigate(`/list${categoryList.sub_categories.id}`); //이부분도 구현중입니다 :)
  };

  return (
    <>
      <section className="subVisual">
        <div className="img">
          <img src={categoryList.image_url} alt="sub visual" />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>{categoryList.name}</h2>
            <p>{categoryList.content}</p>
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
            {categoryList.sub_categories?.map(submenu => {
              return (
                <li key={submenu.id} onClick={goToMenu}>
                  <p>
                    {submenu.name}
                    <span>({submenu.product_count})</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <ProductCard sort={sort} />
      </section>
    </>
  );
};

export default ProductList;
