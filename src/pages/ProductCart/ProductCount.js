import React from 'react';
import './ProductCount.scss';

const ProductCount = ({ el, addCount, minusCount, onChange }) => {
  return (
    <div className="totalCount">
      <div className="countBox">
        <button className="countBtn" onClick={minusCount}>
          -
        </button>
        <input
          type="text"
          className="countNum"
          value={el.quantity}
          onChange={onChange}
        />
        <button className="countBtn" onClick={addCount}>
          +
        </button>
      </div>
      <p className="prPrice">₩{(el.price * el.quantity).toLocaleString()}</p>
    </div>
  );
};

export default ProductCount;
