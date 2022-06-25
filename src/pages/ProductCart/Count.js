import React from 'react';
import './Count.scss';

const ProductCount = ({ el, onIncrease, onDecrease, onChange }) => {
  return (
    <div className="totalCount">
      <div className="countBox">
        <button className="dec" onClick={() => onDecrease(el.id)}>
          -
        </button>
        <input
          type="text"
          className="countNum"
          value={el.quantity}
          onChange={onChange}
        />

        <button className="inc" onClick={() => onIncrease(el.id)}>
          +
        </button>
      </div>
      <p className="prPrice">₩{(el.price * el.quantity).toLocaleString()}</p>
    </div>
  );
};

export default ProductCount;
