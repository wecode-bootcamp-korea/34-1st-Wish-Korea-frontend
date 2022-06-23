import { React, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import './ProductView.scss';

import Options from './Options';
import MultiOption from './OptionBox';
import DetailProduct from './DetailProduct';

const ProductView = () => {
  const [viewData, setViewData] = useState([]);
  const [knowClick, setKnowClick] = useState(false);
  const [totalList, setTotalList] = useState([]);
  let tPrice = 0;

  useEffect(() => {
    fetch('./data/View.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setViewData(data);
      });
  }, []);

  // 옵션 추가 및 중복 추가 방지
  const handleOptions = el => {
    const selectArr = []; //현제 들어온 데이터들의 옵션 아이디를 배열에 저장
    totalList.map(value => selectArr.push(value.oid)); //이번에 들어온 옵션아이디가 없으면 추가, 수량 추가
    if (!selectArr.includes(el.oid)) {
      setTotalList([...totalList, el]);
      el.id = viewData.id;
      el.quantity = 1; // 수량 칼럼 추가
    } else alert('이미 선택된 옵션입니다.');
  };

  totalList.sort((a, b) => a.oid - b.oid); //옵션 정렬

  // 클릭 이벤트로 받아온 아이디와 저장한 리스트의 아이디를 비교하여 값 변환
  const increase = id => {
    //옵션 증가
    setTotalList(val =>
      val.map(el => {
        if (id === el.oid) el.quantity++; //재고 시스템 도입시 여기에 조건 걸어주면 됨
        return el;
      })
    );
  };

  const decrease = id => {
    //옵션 감소
    setTotalList(val =>
      val.map(el => {
        if (id === el.oid && el.quantity > 1) el.quantity--;
        return el;
      })
    );
  };

  const deleteOption = id => {
    //옵션 삭제
    setTotalList(val => {
      return val.filter(val => val.oid !== id);
    });
  };

  // 컴포넌트화 예정인 옵션창, 총 가격 계산
  const totalMap = totalList.map(el => {
    tPrice = tPrice + el.price * el.quantity;
    return (
      <Options
        key={el.oid}
        el={el}
        increase={increase}
        decrease={decrease}
        deleteOption={deleteOption}
      />
    );
  });

  // console.log('장바구니에 보내줄거', totalList);

  return (
    <div className="productView">
      <div className="detailInfo">
        <img className="detailImg" src={viewData.img} alt="상세이미지" />
        <div className="detailBox">
          <span className="detailName">
            {viewData.name}
            {'   '}
            {viewData.option?.map((el, idx) => {
              return idx === 0 ? (
                <span key={el.oid}>{el.weight}</span>
              ) : (
                <span key={el.oid}>/{el.weight}</span>
              );
            })}
            <img className="detailShare" src="images/share.png" alt="share" />
          </span>
          <div className="detailKeyword">{viewData.keyword}</div>
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
            {knowClick ? (
              <div className="popBox">
                <img className="knowPop" src="images/knowImg.png" alt="know" />
                <FontAwesomeIcon
                  className="knowX"
                  icon={faX}
                  onClick={() => setKnowClick(0)}
                />
              </div>
            ) : (
              ''
            )}
          </div>

          <ul className="detailList">
            <li className="detailText">
              <span className="detailClass">판매가</span>
              <span className="detailPrice">
                ₩
                {viewData.option
                  ? viewData.option[0].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : ''}
              </span>
            </li>
            <li className="detailText">
              <span className="detailClass">상품 무게</span>{' '}
              {viewData.option ? viewData.option[0].weight : ''}
            </li>
          </ul>

          <MultiOption
            viewData={viewData}
            handleOptions={handleOptions}
            totalMap={totalMap}
            totalList={totalList}
            tPrice={tPrice}
          />

          <div className="detailBtnBox">
            <button className="detailBtn type1">장바구니</button>
            <button className="detailBtn type2">주문하기</button>
          </div>
        </div>
      </div>
      <DetailProduct />
    </div>
  );
};

export default ProductView;

// function nice() {
//   return
// }

// const sum = (a,b) => {
//   return a+b
// }

// const add = (a,b) => a+b
