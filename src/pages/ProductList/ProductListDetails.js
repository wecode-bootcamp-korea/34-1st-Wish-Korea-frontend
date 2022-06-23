import React, { useState, useEffect } from 'react';

const ProductListDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/detailsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
      });
  }, []);

  return (
    <>
      {details.map(details => {
        return (
          <li key={details.id}>
            <div className="innerBox">
              <div className="thumb">
                <div className="img">
                  <img src="./images/list_img2.jpg" alt="thumb img" />
                </div>
                <div className="quickIcons">
                  <ul>
                    <li>
                      <a href="">
                        <img src="./images/heart.png" alt="heart" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="./images/add-to-cart.png" alt="heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="icons">
                {details.is_new === 0 ? (
                  ''
                ) : (
                  <span className="iconNew">NEW</span>
                )}
                {details.is_vegan === 0 ? (
                  ''
                ) : (
                  <span className="iconVegan">VEGAN</span>
                )}
                {details.is_only_online === 0 ? (
                  ''
                ) : (
                  <span className="iconOnline">온라인전용</span>
                )}
                {details.is_made_in_korea === 0 ? (
                  ''
                ) : (
                  <span className="iconLocal">국내제조</span>
                )}
                {details.is_sold_out === 0 ? (
                  ''
                ) : (
                  <span className="iconSoldOut">품절</span>
                )}
              </div>
              <div className="title">
                <h4>{details.name}</h4>
                <span className="shotdesc">{details.shotdesc}</span>
              </div>
              <div className="price">￦ {details.price}</div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ProductListDetails;
