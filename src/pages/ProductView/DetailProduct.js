import React from 'react';

const DetailProduct = () => {
  return (
    <div className="detailProduct">
      <div id="detail">
        <div className="tabBox">
          <a className="tab clicked" href="#detail">
            상품상세정보
          </a>
          <a className="tab unclicked" href="#reviews">
            상품후기
          </a>
          <a className="tab unclicked" href="#delivery">
            배송/교환 및 반품안내
          </a>
        </div>

        <div className="detailContent">
          <img
            className="contentImage"
            src="images/detail1.png"
            alt="details"
          />
        </div>
      </div>

      <div id="reviews">
        <div className="tabBox">
          <a className="tab unclicked" href="#detail">
            상품상세정보
          </a>
          <a className="tab clicked" href="#reviews">
            상품후기
          </a>
          <a className="tab unclicked" href="#delivery">
            배송/교환 및 반품안내
          </a>
        </div>

        <div className="detailContent">
          <img
            className="contentImage"
            src="images/detail2.png"
            alt="details"
          />
        </div>
      </div>

      <div id="delivery">
        <div className="tabBox">
          <a className="tab unclicked" href="#detail">
            상품상세정보
          </a>
          <a className="tab unclicked" href="#reviews">
            상품후기
          </a>
          <a className="tab clicked" href="#delivery">
            배송/교환 및 반품안내
          </a>
        </div>

        <div className="detailContent">
          <img
            className="contentImage"
            src="images/detail3.png"
            alt="details"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
