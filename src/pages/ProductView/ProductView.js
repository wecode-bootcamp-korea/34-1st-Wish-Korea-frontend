import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import OptionSelect from './OptionSelect';
import OptionAddLine from './OptionAddLine';
import DetailProduct from './DetailProduct';
import './ProductView.scss';

const ProductView = () => {
  const [viewData, setViewData] = useState([]);
  const [isKnowClick, setIsKnowClick] = useState(false);
  const [totalList, setTotalList] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState();
  const params = useParams();
  let tPrice = 0;

  // 데이터 받아올 때 fetch
  useEffect(() => {
    fetch(`http://10.58.2.87:8000/products/${params.id}`, {
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

  // 옵션 유무 boolean
  const isOption = viewData.items && viewData.items.length !== 1;

  // 옵션 추가 및 중복 추가 방지
  const handleOptions = el => {
    const selectArr = []; //현제 들어온 데이터들의 옵션 아이디를 배열에 저장
    totalList.map(value => selectArr.push(value.id)); //이번에 들어온 옵션아이디가 없으면 추가, 수량 추가
    if (!selectArr.includes(el.id) && el.stock !== 0) {
      setTotalList([...totalList, el]);
      el.quantity = 1; // 수량 칼럼 추가
    } else if (selectArr.includes(el.id)) alert('이미 선택된 옵션입니다.');
    else if (el.stock === 0) alert('재고가 없습니다');
    else alert('에러');
  };

  totalList.sort((a, b) => a.id - b.id); //옵션 정렬

  //옵션 증가
  const increaseOption = id => {
    setTotalList(list =>
      list.map(el => {
        // 클릭 이벤트로 받아온 아이디와 저장한 리스트의 아이디를 비교하여 값 변환
        if (id === el.id && el.quantity < el.stock)
          el.quantity++; //재고 시스템 도입시 여기에 조건 걸어주면 됨
        else if (id === el.id && el.quantity >= el.stock)
          alert(`재고 부족 / 현재 재고 : ${el.stock}개`);
        return el;
      })
    );
  };

  //옵션 감소
  const decreaseOption = id => {
    setTotalList(list =>
      list.map(el => {
        if (id === el.id && el.quantity > 1) el.quantity--;
        return el;
      })
    );
  };

  //옵션 삭제
  const deleteOption = id => {
    setTotalList(val => {
      return val.filter(val => val.id !== id);
    });
  };

  const goToCart = () => {
    fetch('http://10.58.2.87:8000/orders/carts', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('Authorization') },
      body: JSON.stringify({
        items: totalList,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Out of stock') {
          alert('재고가 부족합니다');
        } else {
          if (totalList.length !== 0) {
            alert('장바구니에 담았습니다');
          } else alert('옵션을 선택해주세요');
        }
      });
    if (isOption) {
      setTotalList([]);
    }
  };
  // console.log('백엔드에서받은거:', viewData, '장바구니 보내줄거:', totalList);
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
          {/* 옵션 선택시 추가되는 input  */}
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
          {/* 버튼 */}
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
      {/* 상세 */}
      <DetailProduct viewData={viewData} />
    </div>
  );
};

export default ProductView;
