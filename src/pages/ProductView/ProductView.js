import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import OptionSelect from './OptionSelect';
import OptionAddLine from './OptionAddLine';
import DetailProduct from './DetailProduct';
import './ProductView.scss';

const ProductView = () => {
  const [viewData, setViewData] = useState({});
  const [isKnowClick, setIsKnowClick] = useState(false);
  const [totalList, setTotalList] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState();
  const navigate = useNavigate();
  const params = useParams();
  let tPrice = 0;

  useEffect(() => {
    fetch(`http://10.58.4.185:8000/products/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        data.result.items.length === 1 &&
          setTotalList([{ ...data.result.items[0], quantity: 1 }]);
        setViewData(data.result);
        setThumbnailImage(data.result.image);
      });
  }, []);

  const isOption = viewData.items && viewData.items.length !== 1;

  const handleOptions = el => {
    const selectArr = [];
    totalList.map(value => selectArr.push(value.id));
    if (!selectArr.includes(el.id) && el.stock !== 0) {
      setTotalList([...totalList, el]);
      el.quantity = 1;
    } else if (selectArr.includes(el.id)) alert('이미 선택된 옵션입니다.');
    else if (el.stock === 0) alert('재고가 없습니다');
    else alert('에러');
  };

  totalList.sort((a, b) => a.id - b.id);

  const increaseOption = id => {
    setTotalList(list =>
      list.map(el => {
        if (id === el.id && el.quantity < el.stock) el.quantity++;
        else if (id === el.id && el.quantity >= el.stock)
          alert(`재고 부족 / 현재 재고 : ${el.stock}개`);
        return el;
      })
    );
  };

  const decreaseOption = id => {
    setTotalList(list =>
      list.map(el => {
        if (id === el.id && el.quantity > 1) el.quantity--;
        return el;
      })
    );
  };

  const deleteOption = id => {
    setTotalList(val => {
      return val.filter(val => val.id !== id);
    });
  };

  const goToCart = () => {
    fetch('http://10.58.4.185:8000/orders/carts', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('Authorization') },
      body: JSON.stringify({
        items: totalList,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'INVALID_TOKEN') {
          alert('로그인 하세요');
          navigate('/login');
        } else if (data.message === 'Out of stock') {
          alert('재고가 부족합니다');
        } else {
          totalList.length === 0
            ? alert('옵션을 선택해주세요')
            : alert('장바구니에 담았습니다');
        }
      });
    if (isOption) {
      setTotalList([]);
    }
  };

  return (
    <div className="productView">
      <div className="detailInfo">
        <div className="detailImgBox">
          <img className="detailImg" src={thumbnailImage} alt="상세이미지" />
          <div className="detailThumbnailBox">
            <img
              className="detailThumbnail"
              src={viewData.image}
              alt="상품이미지"
              onClick={() => setThumbnailImage(viewData.image)}
            />
            {viewData.items?.length > 1 &&
              viewData.items?.map(option => (
                <img
                  key={option.id}
                  className="detailThumbnail"
                  src={option.image}
                  alt="상품이미지"
                  onClick={() => setThumbnailImage(option.image)}
                />
              ))}
          </div>
        </div>
        <div className="detailBox">
          <span className="detailName">
            {viewData.name}&nbsp;
            {viewData.items?.map(el => {
              return (
                <span className="detailGram" key={el.id}>
                  {el.size_g}g
                </span>
              );
            })}
            <img
              className="detailShare"
              src="/images/view/share.png"
              alt="share"
              onClick={e => {
                e.preventDefault();
                let url = window.location.href;
                navigator.clipboard.writeText(url);
                alert('복사 완료');
              }}
            />
            <img
              className="detailHeart"
              src="/images/view/heart.png"
              alt="heart"
              onClick={() => alert('좋아요 ~')}
            />
          </span>
          <div className="detailKeyword">{viewData.tag}</div>
          <div className="detailText">
            Good to know&nbsp;
            <img
              className="know"
              src="/images/view/know.png"
              alt="know"
              onClick={() => setIsKnowClick(!isKnowClick)}
            />
            {isKnowClick && (
              <div className="popBox">
                <img
                  className="knowPop"
                  src="/images/view/knowImg.png"
                  alt="know"
                />
                <FontAwesomeIcon
                  className="knowX"
                  icon={faX}
                  onClick={() => setIsKnowClick(false)}
                />
              </div>
            )}
          </div>
          <ul className="detailList">
            <li className="detailText">
              <span className="detailClass">판매가</span>
              <span className="detailPrice">
                ₩{viewData.items && viewData.items[0].price.toLocaleString()}
              </span>
            </li>
            <li className="detailText">
              <span className="detailClass">상품 무게</span>
              {viewData.items && viewData.items[0].size_g}g
            </li>
          </ul>
          {isOption && (
            <OptionSelect
              viewData={viewData}
              handleOptions={handleOptions}
              totalList={totalList}
              tPrice={tPrice}
            />
          )}

          {totalList.length > 0 && (
            <>
              <div className="detailTotal">
                {totalList.map(selectedOption => {
                  tPrice =
                    tPrice + selectedOption.price * selectedOption.quantity;
                  return (
                    <OptionAddLine
                      key={selectedOption.id}
                      isOption={isOption}
                      selectedOption={selectedOption}
                      increaseOption={() => increaseOption(selectedOption.id)}
                      decreaseOption={() => decreaseOption(selectedOption.id)}
                      deleteOption={() => deleteOption(selectedOption.id)}
                    />
                  );
                })}
              </div>
              <div className="detailTotalPrice">
                <span className="priceTitle">총제품금액</span>
                <strong className="tPrice">₩{tPrice.toLocaleString()}</strong>
              </div>
            </>
          )}

          <div className="detailBtnBox">
            {isOption ? (
              <>
                <button className="detailBtn type1" onClick={() => goToCart()}>
                  장바구니
                </button>
                <button
                  className="detailBtn type2"
                  onClick={() => alert('장바구니를 이용해주세요')}
                >
                  주문하기
                </button>
              </>
            ) : (
              <>
                {totalList[0]?.stock === 0 ? (
                  <button
                    className="detailBtn type3"
                    onClick={() => alert('품절입니다')}
                  >
                    품절
                  </button>
                ) : (
                  <button
                    className="detailBtn type1"
                    onClick={() => goToCart()}
                  >
                    장바구니
                  </button>
                )}
                <button
                  className="detailBtn type2"
                  onClick={() => alert('미구현')}
                >
                  주문하기
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <DetailProduct viewData={viewData} />
    </div>
  );
};

export default ProductView;
