import React from 'react';

const Options = ({ el, increase, decrease, deleteOption }) => {
  const onChange = e => {};
  return (
    <div className="optionLine" key={el.oid}>
      <span className="detailClass" />
      <span className="countLine">
        <button
          className="optionBtn"
          onClick={() => {
            decrease(el.oid);
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
            increase(el.oid);
          }}
        >
          +
        </button>
      </span>
      <span className="optionText">
        {el.weight}/ ₩
        {(el.price * el.quantity)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </span>
      <button className="optionDelete" onClick={() => deleteOption(el.oid)}>
        X
      </button>
    </div>
  );
};

export default Options;
