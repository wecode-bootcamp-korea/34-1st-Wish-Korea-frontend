import React, { useState } from 'react';

const OptionSelect = ({ viewData, handleOptions }) => {
  const [clickOptions, setClickOptions] = useState(false);
  return (
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
            {viewData.products?.map((el, idx) => {
              return idx === 0 ? (
                <li
                  className="option"
                  key={el.id}
                  onClick={() => {
                    handleOptions(el);
                  }}
                >
                  {el.size_g}g
                </li>
              ) : (
                <li
                  className="option"
                  key={el.id}
                  onClick={() => {
                    handleOptions(el);
                  }}
                >
                  {el.size_g}g :{'  '} ₩+
                  {(el.price - viewData.products[0].price).toLocaleString()}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OptionSelect;
