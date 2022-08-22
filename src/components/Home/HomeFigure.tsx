import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

interface IProps {
  productInfo: { id: number; imageUrl: string; productList: IProductList[] };
}
export interface IProductList {
  idx: number;
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

interface Props {
  productInfo: IProps['productInfo'];
  search: boolean[];
  handleSearch: (index: number) => void;
}
export default function HomeFigure(props: Props) {
  const productLists = props.productInfo.productList;

  return (
    <Figure>
      <MainImage
        src={props.productInfo.imageUrl}
        alt="메인 이미지"
        onClick={() => props.handleSearch}
      />
      {productLists?.map((productLists: IProductList, index: number) => {
        return (
          <Button
            pointX={productLists.pointX}
            pointY={productLists.pointY}
            onClick={() => props.handleSearch(index)}
            key={index}
          >
            {!props.search[index] ? (
              <img
                src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                alt="돋보기아이콘"
              />
            ) : (
              <div>
                <img
                  src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
                  alt="취소아이콘"
                />
                <img
                  src="https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png"
                  alt="세모아이콘"
                />
                <ToolTip>
                  <img
                    src={productLists.imageUrl}
                    alt={productLists.productName}
                  />
                  <ToolTipDesc>
                    <span>{productLists.productName}</span>
                    <ToolTipPrice>
                      {productLists.outside === true ? (
                        <div>예상가</div>
                      ) : (
                        <span>{productLists.discountRate}%</span>
                      )}
                      {productLists.priceDiscount
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                    </ToolTipPrice>
                  </ToolTipDesc>

                  <MoveIcon>
                    <img
                      src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
                      alt="이동아이콘"
                    />
                  </MoveIcon>
                </ToolTip>
              </div>
            )}
          </Button>
        );
      })}
    </Figure>
  );
}
const Figure = styled.figure`
  position: relative;
  margin: 0 auto 12px;
`;

const MainImage = styled.img`
  width: 800px;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('mobile')`
		width: 590px;
	`}
`;

interface Point {
  pointX: number;
  pointY: number;
}

const Button = styled.div<Point>`
  top: ${props => props.pointX * 1.6}px;
  left: ${props => props.pointY * 1.6}px;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('mobile')`
  top: ${(props: any) => props.pointX * 1.2}px;
  left: ${(props: any) => props.pointY * 1.2}px;
	`}
  img {
    width: 32px;
  }
`;

const ToolTip = styled.span`
  z-index: 100;
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  img {
    width: 70px;
    height: 70px;
    margin-right: 8px;
    border-radius: 4px;
  }
`;

const ToolTipDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  overflow: hidden;
  span {
    line-height: 1.3em;
    width: 112px;
  }
`;

const ToolTipPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: #181d1f;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  div {
    color: #898f94;
    margin-right: 5px;
    line-height: 1.2em;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
  }
  span {
    color: #ff585d;
    margin-right: 4px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
  }
`;

const MoveIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
  cursor: pointer;
  img {
    width: 19px;
    height: 17px;
  }
`;
