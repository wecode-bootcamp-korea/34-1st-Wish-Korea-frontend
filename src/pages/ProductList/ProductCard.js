import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

const ProductListDetails = ({ sort }) => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

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
  //   fetch('http://10.58.5.14:8000/products?category_id=4', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails(data.result);
  //     });
  // }, []);

  const goToDetail = () => {
    navigate(`/view/${details.id}`);
  };

  sort === 'lowprice' &&
    details.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });

  sort === 'highprice' &&
    details.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });

  return (
    <ul className="productCard">
      {details.products?.map(list => {
        return (
          <li className="productListItem" key={list.id}>
            <div className="innerBox" onClick={goToDetail}>
              <div className="thumb">
                <div className="img">
                  <img src={list.image_url} alt="thumb" />
                </div>
                <div>
                  <ul className="quickIcons">
                    <li>
                      <img src="/images/heart.png" alt="heart" />
                    </li>
                    <li>
                      <img src="/images/add-to-cart.png" alt="heart" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="icons">
                {!!list.is_new && <span className="iconNew">NEW</span>}
                {!!list.is_vegan && <span className="iconVegan">VEGAN</span>}
                {!!list.is_only_online && (
                  <span className="iconOnline">온라인전용</span>
                )}
                {!!list.is_made_in_korea && (
                  <span className="iconLocal">국내제조</span>
                )}
                {!!list.is_sold_out && (
                  <span className="iconSoldOut">품절</span>
                )}
              </div>
              <div className="title">
                <h4>{list.name}</h4>
                <span className="shotdesc">{list.tag}</span>
              </div>
              <div className="price">￦ {list.price}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductListDetails;
