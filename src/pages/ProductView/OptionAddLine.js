import React from 'react';

const OptionAddLine = ({
  isOption,
  selectedOption,
  increaseOption,
  decreaseOption,
  deleteOption,
}) => {
  return (
    <div className={isOption ? 'optionLine' : 'noOptionLine'}>
      <span className="detailClass">용량</span>
      <span className="countLine">
        <button className="optionBtn" onClick={decreaseOption}>
          -
        </button>
        <input
          className="optionCount"
          type="text"
          value={selectedOption.quantity}
          onChange={() => {}}
        />
        <button className="optionBtn" onClick={increaseOption}>
          +
        </button>
      </span>
      {isOption && (
        <>
          <span className="optionText">
            {selectedOption.size_g}g/ ₩
            {(selectedOption.price * selectedOption.quantity).toLocaleString()}
          </span>
          <button className="optionDelete" onClick={deleteOption}>
            X
          </button>
        </>
      )}
    </div>
  );
};

export default OptionAddLine;
