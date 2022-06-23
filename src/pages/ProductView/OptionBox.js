import React, { useState } from 'react';

const OptionBox = ({
  viewData,
  handleOptions,
  totalMap,
  totalList,
  tPrice,
}) => {
  const [clickOptions, setClickOptions] = useState(false);
  return (
    <>
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
          {clickOptions && (
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
          )}
        </div>
      </div>
      {totalList.length > 0 && (
        <>
          <div className="detailTotal">{totalMap}</div>
          <div className="detailTotalPrice">
            <span className="priceTitle">총제품금액</span>
            <strong className="tPrice">
              ₩{tPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </strong>
          </div>
        </>
      )}
    </>
  );
};

export default OptionBox;
