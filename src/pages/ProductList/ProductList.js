import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [categoryList, setCategoryList] = useState({});

  useEffect(() => {
    fetch('/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategoryList(data);
      });
  }, []);

  console.log(categoryList);

  return (
    <>
      <section className="subVisual">
        <div className="img">
          <img src="" alt="sub visual" />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>{categoryList.sub_category_name}</h2>
            <p>{categoryList.content}</p>
          </div>
        </div>
      </section>
      <section className="subContent">
        <div className="subTitle">
          <h3>{categoryList.sub_category_name}</h3>
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
            {categoryList.sub_categories &&
              categoryList.sub_categories.map(submenu => {
                return (
                  <li key={submenu.id}>
                    <p>
                      {submenu.name}
                      <span>({submenu.product_count})</span>
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
        <ProductCard />
      </section>
    </>
  );
};

export default ProductList;
