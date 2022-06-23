import { React, useState } from 'react';
import './Count.scss';

const ProductCount = props => {
  const [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="totalCount">
      <div className="countBox">
        <button className="dec" onClick={onDecrease}>
          -
        </button>
        <input type="text" className="countNum" value={count} />

        <button className="inc" onClick={onIncrease}>
          +
        </button>
      </div>
      <p className="prPrice">
        ₩
        {(props.el.price * count)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  );
};

export default ProductCount;
