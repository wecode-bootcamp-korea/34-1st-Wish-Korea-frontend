import React from 'react';
import './ProductCount.scss';

// 컴포넌트명, 파일명 맞추기
const ProductCount = ({ el, addCount, minusCount, onChange }) => {
  return (
    <div className="totalCount">
      <div className="countBox">
        <button
          className="countBtn"
          onClick={() => {
            minusCount();
            fetch('http://10.58.2.87:8000/orders/carts', {
              method: 'PATCH',
              body: JSON.stringify({ item_id: el.items, quantity: -1 }),
            });
          }}
        >
          -
        </button>
        <input
          type="text"
          className="countNum"
          value={el.quantity}
          onChange={onChange}
        />

        <button
          className="countBtn"
          onClick={() => {
            addCount();
            fetch('http://10.58.2.87:8000/orders/carts', {
              method: 'PATCH',
              body: JSON.stringify({ item_id: el.items, quantity: 1 }),
            });
          }}
        >
          +
        </button>
      </div>
      <p className="prPrice">₩{(el.price * el.quantity).toLocaleString()}</p>
    </div>
  );
};

export default ProductCount;
