# <img src="https://w.namu.la/s/586b56f80ada29375db50c319d2a9522aeda0494f23918781d1399450d2560807943395448b052394b805fb97a10160e916fc11192e7ce18e0f24d8a0cff58a030ee22e6a73a7993d8da26eca145f2708c8178b32febaf309428dc6939d49d88" height="35"/> TypeScript\_ 사진과 가구 조합 컴포넌트 구현


- 집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트 TypeScript로 구현하기

  - 참고: [https://www.ggumim.co.kr/star/view/4582](https://www.ggumim.co.kr/star/view/4582)

## ✎ Introduction

- 개발 기간 | 2022-08-10 ~ 2022-08-11,16 (3일)
- 개발 기능

<img src="https://user-images.githubusercontent.com/100933263/184802072-33ba2c5f-f29d-441f-acf5-d9309264df9d.png" width="450"/>

- 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출  
  </br>

<img src="https://user-images.githubusercontent.com/100933263/184802449-6a10ba48-b65f-4936-8728-5a359debc776.png" width="450"/>
  
  - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
  - 선택된 가구는 선택되었으면 표시
  - 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시 
  </br>
  
  ### 가구 정보는 2가지 형식이 존재 (입점 / 비입점 가구)

  <img src="https://user-images.githubusercontent.com/100933263/184803188-3b75c30c-c293-495d-8285-c099691db0e2.png" width="300"/>

   - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
      - 상품 이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 할인율 (product 정보 discount)
      - 가격 (product 정보 priceDiscount)
      </br>

   <img src="https://user-images.githubusercontent.com/100933263/184803203-7310f27e-e608-412d-a4e8-e052cda9a10b.png" width="300"/>
   
   - 입점되지 않는 가구
      - 상품이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 예상 가격 (product 정보 priceDiscount)
      </br>
      
   ### media query로 모바일 반응형 구현

   <img src="https://user-images.githubusercontent.com/100933263/184804283-d0e9ed16-8474-4d3e-aa4e-a25e63449026.jpg" height="350"/>
      </br>
      
  ### 개발기능 시연
   <img src="https://user-images.githubusercontent.com/100933263/183377666-09211b28-ecd7-4644-bcae-04b37c605c58.gif" height="600"/>
   </br>

## ✎ Technlogies
 <div> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/typeScript-3178C6?style=for-the-badge&logo=typeScript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div> 
<br>

## ✎ Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
