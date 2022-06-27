import React, { useState } from 'react';

const OptionSelect = ({ viewData, handleOptions }) => {
  const [isClickOptions, setIsClickOptions] = useState(false);
  return (
    <div className="optionBox">
      <span className="detailClass">용량 </span>

      <div
        className="select"
        onClick={() => setIsClickOptions(!isClickOptions)}
      >
        <div className="selectFlex">
          <div className="selectTitle">= 옵션 : 가격 =</div>
          <img className="arrow" src="/images/view/arrow.png" alt="arrow" />
        </div>
        {isClickOptions && (
          <ul className="selectList">
            <li className="option">= 옵션 : 가격 = </li>
            {viewData.items?.map((option, idx) => {
              return idx === 0 ? (
                <li
                  className="option"
                  key={option.id}
                  onClick={() => {
                    handleOptions(option);
                  }}
                >
                  <img
                    className="optionImage"
                    src={option.image}
                    alt="상품이미지"
                  />
                  {option.size_g}g
                </li>
              ) : (
                <li
                  className="option"
                  key={option.id}
                  onClick={() => {
                    handleOptions(option);
                  }}
                >
                  {' '}
                  <img
                    className="optionImage"
                    src={option.image}
                    alt="상품이미지"
                  />
                  {option.size_g}g :&nbsp; ₩+
                  {(option.price - viewData.items[0].price).toLocaleString()}
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
