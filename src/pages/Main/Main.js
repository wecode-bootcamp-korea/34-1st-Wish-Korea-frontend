import React, { useState, useEffect } from 'react';
import './Main.scss';

const SLIDER_LIST = [
  {
    id: 1,
    image_url: '/images/main_img3.jpg',
  },
  {
    id: 2,
    image_url: '/images/vs1.jpg',
  },
  {
    id: 3,
    image_url: '/images/main_img4.jpg',
  },
];

const Main = () => {
  const [listItem, setListItem] = useState([]);

  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(SLIDER_LIST);

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--num', carouselItems.length);
  // }, [carouselItems]);

  useEffect(() => {
    fetch('/data/productsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItem(data);
      });
  }, []);

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  };

  const shiftPrev = copy => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = copy => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="main">
      <div className="mainVisual">
        <div className="visualUi">
          <button onClick={() => setMoveClass('next')} className="prev">
            <span className="material-icons">chevron_left</span>
          </button>
          <button onClick={() => setMoveClass('prev')} className="next">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
        <div
          onAnimationEnd={handleAnimationEnd}
          className={`${moveClass} items`}
        >
          {SLIDER_LIST.map(sliderItem => (
            <div key={sliderItem.id} className="item">
              <img src={sliderItem.image_url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mainList">
        <h2 className="title">나만 알고 싶은 향기</h2>
        <ul className="listInner">
          {listItem.products?.map(list => {
            return (
              <li key={list.id}>
                <div className="thumb">
                  <img src={list.image_url} alt="" />
                </div>
                <div className="tit">{list.name}</div>
                <div className="tag">{list.tag}</div>
                <div className="price">￦ {list.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mainEvent">
        <div className="campaign">
          <div className="title">
            <span>CAMPAIGN</span>
            <h2>서명해주세요</h2>
          </div>
          <div className="pic">
            <img src="/images/main_img1.jpg" alt="" />
          </div>
        </div>
        <div className="eventBox">
          <div className="fragrance">
            <div className="title">
              <span>FRAGRANCE</span>
              <h2>
                하루의 시작을
                <br />
                향기롭게
              </h2>
            </div>
            <div className="video">
              <video autoPlay muted loop width="100%" height="100%">
                <source src="/images/main_video1.mp4" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
          <ul className="eventBoxList">
            <li>
              <div className="title">
                <span>BEST</span>
                <h2>
                  모두가 사랑하는 <br />
                  러쉬 베스트
                </h2>
              </div>
              <div className="pic">
                <img src="/images/main_img2.jpg" alt="" />
              </div>
            </li>
            <li>
              <div className="title">
                <span>JEAWISH</span>
                <h2>
                  뭉쳐요, <br />
                  좋았던 그 때로!
                </h2>
              </div>
              <div className="pic">
                <img src="/images/main_img3.jpg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainMassage">
        <div className="innerBox">
          <div className="video">
            <video autoPlay muted loop width="100%" height="100%">
              <source src="/images/main_video2.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <dl className="txt">
            <dt>시네스티지아</dt>
            <dd>
              개인 맞춤형 보디 트린트먼트 오감을 자극하는 보디 마사지는 긴장을
              풀어주고, 스트레스를 완화하여 활력을 불어넣어 줍니다. 한순간에
              모든 감각을 사로잡는 특별함을 느껴보세요.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Main;
