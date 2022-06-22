import { React, useState, useEffect } from 'react';
import './ProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ProductView = () => {
  const [viewData, setViewData] = useState([]);
  const [knowClick, setKnowClick] = useState(false);
  const [clickOptions, setClickOptions] = useState(false);
  const [totalThing, setTotalThing] = useState([]);
  let tPrice = 0;

  useEffect(() => {
    fetch('./data/View.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setViewData(data);
      });
  }, []);

  const totalMap = totalThing.map(el => {
    return (
      <div key={el.oid}>
        수량체크 {el.weight}/{el.price} X버튼
      </div>
    );
  });
  const handleOptions = el => {
    const selectArr = [];
    totalThing.map(el => {
      selectArr.push(el.oid);
    });
    !selectArr.includes(el.oid)
      ? setTotalThing([...totalThing, el])
      : alert('안돼!');
  };

  totalThing?.map(el => {
    tPrice = tPrice + el.price;
  });

  console.log(totalThing);
  return (
    <div className="productView">
      <div className="detailInfo">
        <img className="detailImg" src={viewData.img} alt="상세이미지" />
        <div className="detailBox">
          <span className="detailName">
            {viewData.name}
            {'   '}
            {viewData.option?.map((el, idx) => {
              return idx === 0 ? (
                <span key={el.oid}>{el.weight}</span>
              ) : (
                <span key={el.oid}>/{el.weight}</span>
              );
            })}
            <img className="detailShare" src="images/share.png" alt="share" />
          </span>
          <div className="detailKeyword">{viewData.keyword}</div>
          <div className="detailText">
            Good to know
            {'  '}
            <img
              className="know"
              src="images/know.png"
              alt="know"
              onClick={() =>
                knowClick ? setKnowClick(false) : setKnowClick(true)
              }
            />
            {knowClick ? (
              <div className="popBox">
                <img className="knowPop" src="images/knowImg.png" alt="know" />
                <FontAwesomeIcon
                  className="knowX"
                  icon={faX}
                  onClick={() => setKnowClick(0)}
                />
              </div>
            ) : (
              ''
            )}
          </div>

          <ul className="detailList">
            <li className="detailText">
              <span className="detailClass">판매가</span>
              <span className="detailPrice">
                ₩
                {viewData.option
                  ? viewData.option[0].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : ''}
              </span>
            </li>
            <li className="detailText">
              <span className="detailClass">상품 무게</span>{' '}
              {viewData.option ? viewData.option[0].weight : ''}
            </li>
          </ul>

          <div className="optionBox">
            <span className="detailClass">용량 </span>

            <div
              className="select"
              onClick={() =>
                clickOptions ? setClickOptions(false) : setClickOptions(true)
              }
            >
              <div className="selectFlex">
                <div className="selectTitle">= 옵션 : 가격 =</div>
                <img className="arrow" src="images/arrow.png" alt="arrow" />
              </div>
              {clickOptions ? (
                <ul className="selectList">
                  <li className="option">= 옵션 : 가격 = </li>
                  {viewData.option?.map((el, idx) => {
                    return idx === 0 ? (
                      <li
                        name={el.weight}
                        className="option"
                        key={el.oid}
                        onClick={() => {
                          handleOptions(el);
                          // handlePrice();
                        }}
                      >
                        {el.weight}
                      </li>
                    ) : (
                      <li
                        className="option"
                        key={el.oid}
                        onClick={() => {
                          handleOptions(el);
                          // handlePrice();
                        }}
                      >
                        {el.weight}:{'  '} ₩+
                        {(el.price - viewData.option[0].price)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="detailTotal">{totalMap}</div>

          {totalThing.length > 0 ? (
            <div className="detailPrices">
              <span className="priceTitle">총제품금액</span>
              <strong className="tPrice">
                ₩{tPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </strong>
            </div>
          ) : (
            ''
          )}

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
    </div>
  );
};

export default ProductView;
