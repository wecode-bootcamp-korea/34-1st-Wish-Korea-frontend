
## Wish Korea Project (Front-end) 

- 러쉬 홈페이지를 React로 클론 코딩하며, 학습하는 것이 목표입니다.
- 외부 라이브러리 미사용. 2주간 짧은 기간에 개발하여, 결제/배송 페이지는 미구현하였습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2022/6/20 ~ 2030/7/1
- 개발 인원 : 프론트엔드 4명, 백엔드 1명 
* Front-end : [하상원](https://github.com/hasangwon), [우혜림](https://github.com/wooohyerim), [안중영](https://github.com/Ahnjungyoung), [정예지](https://github.com/dingwan0331)
* Back-end : [정진관](https://github.com/dingwan0331) 

### 프로젝트 선정이유

- 러쉬 홈페이지는 UI 완성도가 높고, 현재 팀원 구성에 알맞은 프로젝트라 생각하여 선정하게 되었습니다.

<br>

### 협업 툴
- GitHub : 각 페이지마다 branch를 생성하여 관리하였습니다. 
- Trello : 기능 별로 티켓을 만들어 진행 상황을 공유하고, Trello를 토대로 매일 회의 후 회의록을 남겼습니다. 
<img width="1512" alt="스크린샷 2022-07-03 오후 8 38 39" src="https://user-images.githubusercontent.com/75872687/177037919-63cb8cbe-d57a-42f3-bd6d-a6c3b8b919e5.png">
<br>


## 적용 기술 및 구현 페이지

### 적용 기술
HTML/CSS, Javascript, React, Sass, React Router Dom

<br />



### 구현 페이지

#### 회원가입 / 로그인

- 영상
- 구현 기능


#### 메인페이지

![main02](https://user-images.githubusercontent.com/99022588/177146406-5831fa79-e5b2-4636-aa43-5d72b75e275f.gif)
<br />
동적인 기능없이 메인영상과 이미지로 디자인완성했습니다.<br />
중간에

#### Nav, Footer Bar

 <img width="1490" alt="footer" src="https://user-images.githubusercontent.com/98519119/177065931-503f623b-8897-48f7-97a0-fee55e12436f.png">![nav3](https://user-images.githubusercontent.com/98519119/177066388-836b8a16-e5da-4577-a9ae-d20eb2d8257d.gif)


Footer : 동적인 기능 없이 화면만 구성 <br/>
Nav : 마우스를 올렸을 때 하위 카테고리가 나오며, 마우스를 뗐을 때 다시 사라지는 기능을 구현했습니다. 마찬가지로 마이페이지 아이콘에 마우스를 올렸을 때 로그인, 회원가입을 할 수 있는 박스가 나타났다가 사라지는 기능을 구현했습니다.


#### 상품 리스트 페이지

![list02](https://user-images.githubusercontent.com/99022588/177147470-989af989-2a4d-4dd5-a86a-1d2caa3858fd.gif)
<br/>

*백엔드에서 데이터 받아와서 서브 비주얼이미지부터 ~ 타이틀 리스트내용까지 나타나게 구현했습니다 <br />
*sort함수를 사용해서 분류탭에서 낮은가격순/높은가격순 분류 변하게 작업했습니다.



#### 상품 상세 페이지

<img width="500" alt="스크린샷 2022-07-03 오후 11 28 39" src="https://user-images.githubusercontent.com/75872687/177045131-5b6c29a7-6686-4c68-9a9b-42288eb7227e.png"><img width="500" alt="스크린샷 2022-07-03 오후 11 28 28" src="https://user-images.githubusercontent.com/75872687/177045130-a2f949fd-27b7-4b09-95c4-5581708b05d6.png"><br/>
옵션이 한 개일 때와 여러 개일 때를 구분하여,<br/>
한 개일땐 바로 수량 칸을 나타냈고, 받는 데이터에서 바로 옵션에 수량  컬럼 : 1을 추가했습니다<br/>
여러 개일땐 css로 select 박스를 만들어서 옵션을 선택하게 만들고, 옵션을 클릭했을 때 수량 컬럼을 추가하게 구현했습니다.<br/>


![화면_기록_2022-07-03_오후_11_47_39_AdobeExpress](https://user-images.githubusercontent.com/75872687/177045107-006cb88e-065e-4938-ae79-9bfb04890450.gif)

옵션에서 +, - 버튼을 누르면 현재 클릭된 버튼의 id와 일치하는 id의 객체를 찾아서<br/>
그 객체의 수량 값을 더하거나(+), 빼거나(-) 하게 했습니다.<br/>
수량 값이 재고와 같아지면 alert를 띄우고 수량이 증가하지 않게 했습니다.<br/>

<br/>
추가 구현

![화면_기록_2022-07-03_오후_11_39_54_AdobeExpress](https://user-images.githubusercontent.com/75872687/177045008-6965df4a-32a1-4a34-9024-091d31c31b74.gif)

추가 구현 기능으로<br/>
? 버튼 클릭 시 이미지 나타나고 사라짐.<br/>
공유 버튼 클릭 시 클립보드에 주소 복사를 구현하였습니다.<br/>


#### 장바구니 페이지
![cart2](https://user-images.githubusercontent.com/98519119/177066421-86ceaaaa-1812-4f6d-b681-1be660a41ce0.gif)


* 전체 체크박스 선택과 개별 체크박스를 선택할 수 있는 기능을 구현<br>
* 수량 버튼을 클릭 시 +, - 상품 수량 증가, 감소 나타내는 기능 구현<br>
* 체크박스 선택 시 총 주문금액에 수량과 금액 더하도록 기능 구현<br>
* 전체삭제 및 개별삭제 기능 구현



<br>

## Reference

- 이 프로젝트는 [러쉬](https://www.lush.co.kr) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
