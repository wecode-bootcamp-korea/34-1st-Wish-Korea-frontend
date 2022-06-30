import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCount from './ProductCount';
import './ProductCart.scss';

const DELIVERY_FEE = 2500;

const ProductCart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkedBox, setCheckedBox] = useState([]);
  const isAllChecked =
    cartList.length !== 0 && cartList.length === checkedBox.length;

  let sumPrice = 0;

  useEffect(() => {
    fetch('http://10.58.4.185:8000/orders/carts', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('Authorization') },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data.result.carts);
      });
  }, []);

  const handleCheckAll = () => {
    setCheckedBox(cartList.map(el => el.cart_id));
    if (isAllChecked) {
      setCheckedBox([]);
    }
  };

  const handleCheck = e => {
    const { id, checked } = e.target;
    setCheckedBox([...checkedBox, Number(id)]);
    if (!checked) {
      setCheckedBox(checkedBox.filter(item => item !== Number(id)));
    }
  };

  const addCount = id => {
    fetch('http://10.58.4.185:8000/orders/cart', {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('Authorization') },
      body: JSON.stringify({ cart_id: id, quantity: 1 }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          setCartList(cart =>
            cart.map(onecart => {
              if (id === onecart.cart_id) onecart.quantity++;
              return onecart;
            })
          );
        } else if (data.message === 'Out of stock') {
          alert('다시 시도해 주세요');
        } else {
          alert('ERROR');
        }
      });
  };

  const minusCount = id => {
    const selectedIdx = cartList.findIndex(el => id === el.cart_id);
    const selectedQuantity = cartList[selectedIdx].quantity;

    if (selectedQuantity === 1) {
      alert('주문 가능한 수량은 1개 이상입니다.');
      return;
    }

    fetch('http://10.58.4.185:8000/orders/cart', {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('Authorization') },
      body: JSON.stringify({ cart_id: id, quantity: -1 }),
    }).then(res => {
      if (res.ok) {
        setCartList(cart =>
          cart.map(onecart => {
            if (id === onecart.cart_id && onecart.quantity > 1)
              onecart.quantity--;
            return onecart;
          })
        );
      }
    });
  };

  const deleteAll = () => {
    if (window.confirm('모든 상품을 장바구니에서 삭제 하시겠습니까?')) {
      fetch(`http://10.58.4.185:8000/orders/carts`, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      }).then(res => {
        console.log(res);
        if (res.status === 204) {
          setCartList([]);
          setCheckedBox('');
        } else {
          alert('다시 시도해주세요!');
        }
      });
    }
  };

  const order = () => {
    if (window.confirm('주문을 완료하시겠습니까?')) {
      alert('주문이 완료되었습니다.');
    } else {
      alert('주문이 취소되었습니다.');
    }
  };

  const onChange = e => {};

  return (
    <section className="productCart">
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
              checked={isAllChecked}
              onClick={handleCheckAll}
              className="checkBox"
              onChange={onChange}
            />
            <p className="infoBox">제품 정보</p>
            <p className="infoBox">수량</p>
            <p className="infoBox">금액</p>
          </div>
          {cartList.length !== 0 ? (
            cartList.map(cart => {
              checkedBox.includes(cart.cart_id) &&
                (sumPrice = sumPrice + cart.price * cart.quantity);

              return (
                <div className="productList" key={cart.cart_id}>
                  <input
                    key={cart.cart_id}
                    type="checkbox"
                    id={cart.cart_id}
                    checked={checkedBox.includes(cart.cart_id)}
                    onClick={handleCheck}
                    onChange={onChange}
                    className="checkBox"
                  />
                  <div className="prBox">
                    <img src={cart.image_url} alt="img" className="prImg" />
                    <h1 className="prTitle">
                      {cart.name}
                      <br />
                      <span className="prCate">{cart.sub_catgory_name}</span>
                    </h1>
                  </div>

                  <div className="countBox">
                    <ProductCount
                      el={cart}
                      addCount={() => addCount(cart.cart_id)}
                      minusCount={() => minusCount(cart.cart_id)}
                      onChange={onChange}
                    />
                  </div>
                  <button
                    className="listDelete"
                    onClick={() => {
                      fetch(
                        `http://10.58.4.185:8000/orders/carts/${cart.cart_id}`,
                        {
                          method: 'DELETE',
                          headers: {
                            Authorization:
                              localStorage.getItem('Authorization'),
                          },
                        }
                      ).then(res => {
                        if (res.status === 204) {
                          setCartList(
                            cartList.filter(el => el.cart_id !== cart.cart_id)
                          );
                        } else {
                          alert('삭제할 상품이 없습니다.');
                        }
                      });
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })
          ) : (
            <p className="cartEmpty">장바구니가 비었습니다.</p>
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
