import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import OptionSelect from './OptionSelect';
import OptionAddLine from './OptionAddLine';
import DetailProduct from './DetailProduct';
import './ProductView.scss';

const ProductView = () => {
  const [viewData, setViewData] = useState([]);
  const [knowClick, setKnowClick] = useState(false);
  const [totalList, setTotalList] = useState([]);
  const navigate = useNavigate();
  let tPrice = 0;

  useEffect(() => {
    fetch('./data/backend.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setViewData(data.result);
      });
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.1.112:8000/products/24', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(data => {
  //       setViewData(data.result);
  //     });
  // }, []);

  // 옵션 추가 및 중복 추가 방지
  const handleOptions = el => {
    const selectArr = []; //현제 들어온 데이터들의 옵션 아이디를 배열에 저장
    totalList.map(value => selectArr.push(value.id)); //이번에 들어온 옵션아이디가 없으면 추가, 수량 추가
    if (!selectArr.includes(el.id)) {
      setTotalList([...totalList, el]);
      // el.id = viewData.product_id;
      el.quantity = 1; // 수량 칼럼 추가
    } else alert('이미 선택된 옵션입니다.');
  };

  totalList.sort((a, b) => a.id - b.id); //옵션 정렬

  // 클릭 이벤트로 받아온 아이디와 저장한 리스트의 아이디를 비교하여 값 변환
  const increase = id => {
    //옵션 증가
    setTotalList(val =>
      val.map(el => {
        if (id === el.id) el.quantity++; //재고 시스템 도입시 여기에 조건 걸어주면 됨
        return el;
      })
    );
  };

  const decrease = id => {
    //옵션 감소
    setTotalList(val =>
      val.map(el => {
        if (id === el.id && el.quantity > 1) el.quantity--;
        return el;
      })
    );
  };

  const deleteOption = id => {
    //옵션 삭제
    setTotalList(val => {
      return val.filter(val => val.id !== id);
    });
  };

  const goToCart = () => {
    navigate('/view');
    alert('미구현');
  };

  // console.log('백엔드에서받은거:', viewData, '장바구니 보내줄거:', totalList);
  return (
    <div className="productView">
      <div className="detailInfo">
        <img className="detailImg" src={viewData.image} alt="상세이미지" />
        <div className="detailBox">
          <span className="detailName">
            {viewData.name}
            {'   '}
            {viewData.products?.map((el, idx) => {
              return idx === 0 ? (
                <span key={el.id}>{el.size_g}g</span>
              ) : (
                <span key={el.id}>/{el.size_g}g</span>
              );
            })}
            <img
              className="detailShare"
              src="images/share.png"
              alt="share"
              onClick={() => alert('복사')}
            />
          </span>
          <div className="detailKeyword">{viewData.tag}</div>
          <div className="detailText">
            Good to know
            {'  '}
            <img
              className="know"
              src="images/know.png"
              alt="know"
              onClick={() =>
                knowClick ? setKnowClick(false) : setKnowClick(true)
              }
            />
            {knowClick && (
              <div className="popBox">
                <img className="knowPop" src="images/knowImg.png" alt="know" />
                <FontAwesomeIcon
                  className="knowX"
                  icon={faX}
                  onClick={() => setKnowClick(false)}
                />
              </div>
            )}
          </div>
          <ul className="detailList">
            <li className="detailText">
              <span className="detailClass">판매가</span>
              <span className="detailPrice">
                ₩
                {viewData.products &&
                  viewData.products[0].price.toLocaleString()}
              </span>
            </li>
            <li className="detailText">
              <span className="detailClass">상품 무게</span>{' '}
              {viewData.products && viewData.products[0].size_g}g
            </li>
          </ul>
          <OptionSelect
            viewData={viewData}
            handleOptions={handleOptions}
            totalList={totalList}
            tPrice={tPrice}
          />

          {/* 옵션 선택시 추가되는 input  */}
          {totalList.length > 0 && (
            <>
              <div className="detailTotal">
                {totalList.map(el => {
                  tPrice = tPrice + el.price * el.quantity;
                  return (
                    <OptionAddLine
                      key={el.id}
                      el={el}
                      increase={increase}
                      decrease={decrease}
                      deleteOption={deleteOption}
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
            <button className="detailBtn type1" onClick={() => goToCart()}>
              장바구니
            </button>
            <button className="detailBtn type2" onClick={() => alert('미구현')}>
              주문하기
            </button>
          </div>
        </div>
      </div>
      {/* 상세 */}
      <DetailProduct viewData={viewData} />
    </div>
  );
};

export default ProductView;
