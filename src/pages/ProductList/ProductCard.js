import React, { useState, useEffect } from 'react';
import './ProductCard.scss';

const ProductListDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('/data/detailsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
      });
  }, []);

  return (
    <div className="productList">
      <ul>
        {details.map(list => {
          return (
            <li key={list.id}>
              <div className="innerBox">
                <div className="thumb">
                  <div className="img">
                    <img src={list.image_url} alt="thumb img" />
                  </div>
                  <div className="quickIcons">
                    <ul>
                      <li>
                        <p>
                          <img src="/images/heart.png" alt="heart" />
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src="/images/add-to-cart.png" alt="heart" />
                        </p>
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
                  <span className="shotdesc">{list.shotdesc}</span>
                </div>
                <div className="price">￦ {list.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListDetails;
