import React from 'react';

const DetailProduct = ({ viewData }) => {
  return (
    <div className="detailProduct">
      <div id="detail">
        <div className="tabBox">
          <a className="tab clicked" href="#detail">
            상품상세정보
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
          <div className="detailComponents">
            <div className="components">
              <div className="compoTitle">제품 성분</div>
              <br />
              <li className="compoSubTitle">원재료의 특성에 한함</li>
              대표 성분
              <div>
                {viewData &&
                  viewData.components?.map((val, idx) => {
                    if (val.important === true && idx === 0) {
                      return idx === 0 ? (
                        <span key={idx}>{val.name}</span>
                      ) : (
                        <span key={idx}>, {val.name}</span>
                      );
                    } else {
                      return '';
                    }
                  })}
              </div>
              <br />전 성분 표기
              <div>
                {viewData &&
                  viewData.components?.map((val, idx) => {
                    return idx === 0 ? (
                      <span key={idx}>{val.name}</span>
                    ) : (
                      <span key={idx}>, {val.name}</span>
                    );
                  })}
              </div>
              <img
                className="compoImg2"
                src="images/comImg2.png"
                alt="성분이야"
              />
            </div>
            <img className="compoImg" src="images/comImg.png" alt="이미지야" />
          </div>
        </div>
      </div>

      <div id="delivery">
        <div className="tabBox">
          <a className="tab unclicked" href="#detail">
            상품상세정보
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
