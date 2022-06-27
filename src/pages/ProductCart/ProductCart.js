import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Count from './Count';
import './ProductCart.scss';

const ProductCart = () => {
  const [cartList, setCartList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  let sumPrice = 0;

  useEffect(() => {
    fetch('/data/List.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  const handleCheckAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(cartList.map(el => el.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  //전체 체크박스

  const handleCheck = e => {
    const { id, checked } = e.target;

    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== Number(id)));
      setIsCheckAll(false);
    }
  }; //개별 체크박스

  const onIncrease = id => {
    setCartList(cart =>
      cart.map(onecart => {
        if (id === onecart.id) onecart.quantity++;
        return onecart;
      })
    );
  }; //수량 증가

  const onDecrease = id => {
    setCartList(cart =>
      cart.map(onecart => {
        if (id === onecart.id && onecart.quantity > 1) onecart.quantity--;
        return onecart;
      })
    );
  }; //수량 감소

  const allDelete = () => {
    let del = [...cartList];
    del.splice(cartList);
    setCartList(del);
    setIsCheckAll(false);
    setIsCheck('');
  }; //전체삭제 하기 버튼 클릭 시 모든 값 0

  const confirm = () => {
    if (window.confirm('주문을 완료하시겠습니까?')) {
      alert('주문이 완료되었습니다.');
    } else {
      alert('주문이 취소되었습니다.');
    }
  };

  const onChange = e => {};

  return (
    <section className="contents">
      <div className="cartTitle">
        <div className="titleBox">
          <h1>SHOPPING CART</h1>
          <ul className="titleList">
            <li>
              <span>Cart &nbsp;&nbsp;</span> &gt;
            </li>
            <li>Order &nbsp;&nbsp; &gt;</li>
            <li>Order confirmed</li>
          </ul>
        </div>
      </div>

      <div className="cartContent">
        <div className="cartName">
          <p>제품</p>
        </div>

        <div className="cartList">
          <div className="cartInfo">
            <input
              type="checkbox"
              checked={isCheckAll}
              onClick={handleCheckAll}
              className="check1"
              onChange={onChange}
            />
            <p className="info">제품 정보</p>
            <p className="count">수량</p>
            <p className="price">금액</p>
          </div>

          {cartList.map((el, i) => {
            isCheck.includes(el.id) &&
              (sumPrice = sumPrice + el.price * el.quantity);

            return (
              <div className="productList" key={el.id}>
                <input
                  key={el.id}
                  type="checkbox"
                  id={el.id}
                  checked={isCheck.includes(el.id)}
                  onClick={handleCheck}
                  onChange={onChange}
                  className="check2"
                />
                <div className="prBox">
                  <img src={el.img} alt="img" className="prImg" />
                  <h1 className="prTitle">
                    {el.name}
                    <br />
                    <span className="prCate">{el.category}</span>
                  </h1>
                </div>

                <div className="countBox">
                  <Count
                    el={el}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onChange={onChange}
                  />
                </div>
                <button
                  className="listDelete"
                  onClick={() => {
                    let del = [...cartList];
                    del.splice(i, 1);
                    setCartList(del);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>

        <div className="cartPrice">
          <p className="countPrice">
            총 {isCheck.length} 개의 금액
            <span className="totalPrice">₩{sumPrice.toLocaleString()}</span> +
            배송비
            <span className="totalPrice">
              ₩{isCheck.length === 0 ? 0 : '2,500'}
            </span>
            = &nbsp;총 주문금액&nbsp;&nbsp;{' '}
            <span className="totalPrice">
              ₩{isCheck.length === 0 ? 0 : (2500 + sumPrice).toLocaleString()}
            </span>
          </p>
        </div>

        <button className="delBtn" onClick={allDelete}>
          전체삭제 하기
        </button>

        <div className="cartButton">
          <div className="goShopping">
            <Link to="/" className="going">
              쇼핑 계속하기
            </Link>
            <button className="orderBtn" onClick={confirm}>
              주문하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
