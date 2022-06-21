import { React, useState, useEffect } from 'react';
import './ProductView.scss';

const ProductView = () => {
  const [viewData, setViewData] = useState([]);
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('./data/View.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setViewData(data);
      });
  }, []);

  return (
    <div className="productView">
      <div className="detailInfo">
        <img className="detailImg" src="images/viewImg.png" alt="상세이미지" />
        <div className="detailBox">
          <span className="detailName">
            {viewData.name}
            {'   '} {viewData.option}
            <img className="detailShare" src="images/share.png" alt="share" />
          </span>
          <div className="detailKeyword">{viewData.keyword}</div>
          <div className="detailText">
            Good to know
            {'  '}
            <img className="know" src="images/know.png" alt="know" />
          </div>

          <ul className="detailList">
            <li className="detailText">
              <span className="detailClass">판매가</span>
              <span className="detailPrice">
                ₩
                {viewData.price
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </li>
            <li className="detailText">
              <span className="detailClass">상품 무게</span> {viewData.weight}
            </li>
          </ul>

          <div className="optionBox">
            <span className="detailClass">용량 </span>
            <select className="option">
              <option defaultValue="1">= 옵션 : 가격 =</option>
              {viewData.option?.map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </select>
          </div>
          <div className="detailBtnBox">
            <button className="detailBtn type1">장바구니</button>
            <button className="detailBtn type2">주문하기</button>
          </div>
        </div>
      </div>

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
          <img src="images/detail1.jpeg" alt="details" />
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
          <img src="images/detail2.jpeg" alt="details" />
        </div>

        <div id="delivery">
          <div className="tabBox">
            <a className="tab" href="#detail">
              상품상세정보
            </a>
            <a className="tab" href="#reviews">
              상품후기
            </a>
            <a className="tab" href="#delivery">
              배송/교환 및 반품안내
            </a>
          </div>
          <img src="images/detail3.jpeg" alt="details" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;

// "id": 1,
// "name": "드림 크림 셀프-프리저빙",
// "option": ["45g", "240g", "450g"],
// "price": 45000,
// "weight": "450g"
