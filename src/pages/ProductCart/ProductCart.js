import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCount from './ProductCount';
import './ProductCart.scss';

const DELIVERY_FEE = 2500;

const ProductCart = () => {
  const [cartList, setCartList] = useState([]);
  // const [isCheckAll, setIsCheckAll] = useState(false); // 아래 state로 계산이 가능하기 때문에 불필요!
  const [checkedBox, setCheckedBox] = useState([]); // isCheck => boolean naming convention이라서 수정! (수정)

  let sumPrice = 0; // 아래 map메서드에서 계산할 필요 없이 여기서 reduce로만 할 수 있음.(참고)

  useEffect(() => {
    fetch('/data/List.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  const handleCheckAll = () => {
    setCheckedBox(cartList.map(el => el.id));
    if (checkedBox.length === cartList.length) {
      setCheckedBox([]);
    }
  };
  // const handleCheckAll = () => {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(cartList.map(el => el.id));
  //   if (isCheckAll) {
  //     setIsCheck([]);
  //   }
  // };
  //전체 체크박스
  console.log(checkedBox);
  const handleCheck = e => {
    const { id, checked } = e.target;
    setCheckedBox([...checkedBox, Number(id)]);
    if (!checked) {
      setCheckedBox(checkedBox.filter(item => item !== Number(id)));
    }
  }; // 체크박스

  const addCount = id => {
    // 어떤 걸 증가, 감소시키는지 명확하게 이름짓기. 동사형으로(수정)
    setCartList(cart =>
      cart.map(onecart => {
        if (id === onecart.id) onecart.quantity++;
        return onecart;
      })
    );
  }; //수량 증가

  const minusCount = id => {
    setCartList(cart =>
      cart.map(onecart => {
        if (id === onecart.id && onecart.quantity > 1) onecart.quantity--;
        return onecart;
      })
    );
  }; //수량 감소

  const deleteAll = () => {
    // 실수로 누를 수도 있으니 confirm으로 하기!(수정)
    if (window.confirm('모든 상품을 장바구니에서 삭제 하시겠습니까?')) {
      setCartList([]);
      setCheckedBox('');
    }
  };

  const order = () => {
    if (window.confirm('주문을 완료하시겠습니까?')) {
      // fetch('API', {
      //   method: 'POST',
      //   body: JSON.stringify({}),
      // });
      alert('주문이 완료되었습니다.');
    } else {
      alert('주문이 취소되었습니다.');
    }
  };

  const onChange = e => {};

  return (
    <section className="productCart">
      {/* 컴포넌트명과 동일한 className (수정)*/}
      <div className="cartTitle">
        <div className="titleBox">
          <h1 className="title">SHOPPING CART</h1>
          <ul className="listBox">
            <li className="titleList">
              <span className="firstList">Cart </span>
            </li>
            <li className="titleList">Order</li>
            <li className="titleList">Order confirmed</li>
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
              checked={checkedBox}
              onClick={handleCheckAll}
              className="checkBox"
              onChange={onChange}
            />
            <p className="infoBox">제품 정보</p>
            <p className="infoBox">수량</p>
            <p className="infoBox">금액</p>
          </div>
          {cartList.length !== 0 ? (
            cartList.map((cart, i) => {
              checkedBox.includes(cart.id) &&
                (sumPrice = sumPrice + cart.price * cart.quantity);

              return (
                <div className="productList" key={cart.id}>
                  <input
                    key={cart.id}
                    type="checkbox"
                    id={cart.id}
                    checked={checkedBox.includes(cart.id)}
                    onClick={handleCheck}
                    onChange={onChange}
                    className="checkBox"
                  />
                  <div className="prBox">
                    <img src={cart.img} alt="img" className="prImg" />
                    <h1 className="prTitle">
                      {cart.name}
                      <br />
                      <span className="prCate">{cart.category}</span>
                    </h1>
                  </div>

                  <div className="countBox">
                    <ProductCount
                      el={cart} // 매개변수명도 명확하게(수정)
                      addCount={() => addCount(cart.id)}
                      minusCount={() => minusCount(cart.id)}
                      onChange={onChange}
                    />
                  </div>
                  <button
                    className="listDelete"
                    onClick={() => {
                      setCartList(cartList.filter(el => el.id !== cart.id)); //참고!
                      // const del = [...cartList];
                      // del.splice(i, 1);
                      // setCartList(del);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })
          ) : (
            <p className="cartEmpty">장바구니가 비었습니다.</p> //이부분 꾸미기 (수정)
          )}
        </div>
        <div className="cartPrice">
          <p className="countPrice">
            총 {checkedBox.length} 개의 금액
            <span className="totalPrice">₩{sumPrice.toLocaleString()}</span> +
            배송비
            <span className="totalPrice">
              ₩{checkedBox.length === 0 ? 0 : DELIVERY_FEE.toLocaleString()}
            </span>
            = 총 주문금액
            <span className="totalPrice">
              ₩
              {checkedBox.length === 0
                ? 0
                : (DELIVERY_FEE + sumPrice).toLocaleString()}
            </span>
          </p>
        </div>
        <button className="delBtn" onClick={deleteAll}>
          전체삭제 하기
        </button>
        <div className="cartButton">
          <div className="goShopping">
            <Link to="/" className="going">
              쇼핑 계속하기
            </Link>
            <button className="orderBtn" onClick={order}>
              주문하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
