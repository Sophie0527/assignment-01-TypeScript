# TypeScript\_ 사진과 가구 조합 컴포넌트 구현

- 집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트 TypeScript로 구현하기

  - 참고: [https://www.ggumim.co.kr/star/view/4582](https://www.ggumim.co.kr/star/view/4582)

## ✎ Introduction

- 개발 기간 | 2022-08-10 ~ 2022-08-11,16 (3일)
- 개발 기능

<img src="" height="200"/>

- 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출  
  </br>

<img src="" height="320"/>
  
  - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
  - 선택된 가구는 선택되었으면 표시
  - 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시 
  </br>
  
  - 가구 정보는 2가지 형식이 존재 (입점 / 비입점 가구)
  
  <img src="" width="216"/>
  
   - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
      - 상품 이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 할인율 (product 정보 discount)
      - 가격 (product 정보 priceDiscount)
      </br>
      
   <img src="" width="210"/>
   
   - 입점되지 않는 가구
      - 상품이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 예상 가격 (product 정보 priceDiscount)
      </br>

- 개발기능 시연
  <img src="" height="600"/>

## ✎ Technlogies

- Front-end
  - HTML | JAVASCRIPT | REACT | TYPESCRIPT | STYLED-COMPONENTS

## ✎ Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
