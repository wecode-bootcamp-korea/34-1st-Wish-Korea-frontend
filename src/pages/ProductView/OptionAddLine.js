import React from 'react';

const OptionAddLine = ({ el, increase, decrease, deleteOption }) => {
  const onChange = e => {};

  return (
    <div className="optionLine" key={el.id}>
      <span className="detailClass" />
      <span className="countLine">
        <button
          className="optionBtn"
          onClick={() => {
            decrease(el.id);
          }}
        >
          -
        </button>
        <input
          className="optionCount"
          type="text"
          value={el.quantity}
          onChange={onChange}
        />
        <button
          className="optionBtn"
          onClick={() => {
            increase(el.id);
          }}
        >
          +
        </button>
      </span>
      <span className="optionText">
        {el.size_g}g/ ₩{(el.price * el.quantity).toLocaleString()}
      </span>
      <button className="optionDelete" onClick={() => deleteOption(el.id)}>
        X
      </button>
    </div>
  );
};

export default OptionAddLine;
