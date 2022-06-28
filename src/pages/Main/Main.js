import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainVisual">
        <div className="item">
          <img src="/images/vs1.jpg" alt="" />
        </div>
      </div>
      <div className="mainList">
        <h2 className="title">나만 알고 싶은 향기</h2>
        <ul className="listInner">
          <li>
            <div className="thumb">
              <img src="/images/list_img2.jpg" alt="" />
            </div>
            <div className="tit">빅</div>
            <div className="tag">#소금샴푸 #풍성한볼륨</div>
            <div className="price">￦ 20,000</div>
          </li>
          <li>
            <div className="thumb">
              <img src="/images/list_img2.jpg" alt="" />
            </div>
            <div className="tit">빅</div>
            <div className="tag">#소금샴푸 #풍성한볼륨</div>
            <div className="price">￦ 20,000</div>
          </li>
          <li>
            <div className="thumb">
              <img src="/images/list_img2.jpg" alt="" />
            </div>
            <div className="tit">빅</div>
            <div className="tag">#소금샴푸 #풍성한볼륨</div>
            <div className="price">￦ 20,000</div>
          </li>
          <li>
            <div className="thumb">
              <img src="/images/list_img2.jpg" alt="" />
            </div>
            <div className="tit">빅</div>
            <div className="tag">#소금샴푸 #풍성한볼륨</div>
            <div className="price">￦ 20,000</div>
          </li>
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
          <ui className="eventBoxList">
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
          </ui>
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
          <div className="txt">
            <dl>
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
    </div>
  );
};

export default Main;
