import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [category, setCategory] = useState({});
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const [sort, setSort] = useState();

  const params = new URLSearchParams(location.search);

  const mainLink = params.get('category_id');
  const subLink = params.get('sub_category_id');

  useEffect(() => {
    fetch('http://10.58.4.185:8000/products/categories', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        data.result.forEach(item => {
          if (item.category_id === Number(mainLink)) setCategory(item);
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.4.185:8000/products?category_id=${mainLink}${
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

  if (Object.keys(category).length === 0) return <>Loding..</>;

  let subIndex = 0;
  if (subLink && Object.keys(category).length) {
    category.sub_categories.forEach((el, index) => {
      if (el.id === subLink) {
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
              subLink
                ? category.sub_categories[subIndex]?.image_url
                : category.image_url
            }`}
            alt="sub visual"
          />
        </div>
        <div className="svTitle">
          <div className="innerText">
            <h2>{`${
              subLink ? category.sub_categories[subIndex]?.name : category.name
            }`}</h2>
            <p>{`${
              subLink
                ? category.sub_categories[subIndex]?.content
                : category.content
            }`}</p>
          </div>
        </div>
      </section>
      <section className="subContent">
        <div className="subTitle">
          <h3>{category.name}</h3>
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
        <ul className="subMenu">
          <li
            className={`${subLink ? '' : 'active'}`}
            onClick={() => goToMenu(category.category_id)}
          >
            <Link to={`/list?category_id=${mainLink}`}>
              전체
              <span>({category.products_count})</span>
            </Link>
          </li>
          {category.sub_categories?.map(submenu => {
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
        {details.products.length === 0 ? (
          <div className="noList">상품이 없습니다.</div>
        ) : (
          <ProductCard sort={sort} details={details} />
        )}
      </section>
    </>
  );
};

export default ProductList;
