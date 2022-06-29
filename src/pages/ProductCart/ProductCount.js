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
            console.log(el);
            fetch('http://10.58.2.87:8000/orders/cart', {
              method: 'PATCH',
              headers: { Authorization: localStorage.getItem('Authorization') },
              body: JSON.stringify({ cart_id: el.cart_id, quantity: -1 }),
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
            fetch('http://10.58.2.87:8000/orders/cart', {
              method: 'PATCH',
              headers: { Authorization: localStorage.getItem('Authorization') },
              body: JSON.stringify({ cart_id: el.cart_id, quantity: 1 }),
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
