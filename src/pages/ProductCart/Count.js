import React, { useState } from 'react';
import './Count.scss';

const ProductCount = ({ el, onIncrease, onDecrease, onChange }) => {
  return (
    <div className="totalCount">
      <div className="countBox">
        <button className="dec" onClick={onDecrease}>
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
      <p className="prPrice">
        ₩
        {(el.price * el.quantity)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  );
};

export default ProductCount;
