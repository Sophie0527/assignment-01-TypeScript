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
  const productLists = props.productInfo?.productList;

  return (
    <WrapProductList>
      {productLists?.map((productLists: IProductList, index: number) => {
        return (
          <ProductList
            key={productLists.productId}
            onClick={() => props.handleSearch(index)}
          >
            {!props.search[index] ? (
              <SubImageBox>
                <SubImage
                  src={productLists.imageUrl}
                  alt={productLists.productName}
                />
                {productLists.discountRate !== 0 ? (
                  <DiscountIconBox>
                    <img
                      src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                      alt="할인북마크아이콘"
                    />
                    <DiscountPrice>
                      {productLists.discountRate}
                      <span>%</span>
                    </DiscountPrice>
                  </DiscountIconBox>
                ) : null}
              </SubImageBox>
            ) : (
              <SubImageBoxPoint>
                <SubImage
                  src={productLists.imageUrl}
                  alt={productLists.productName}
                />
                {productLists.discountRate !== 0 ? (
                  <DiscountIconBox>
                    <img
                      src="//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png"
                      alt="할인북마크아이콘"
                    />
                    <DiscountPrice>
                      {productLists.discountRate}
                      <span>%</span>
                    </DiscountPrice>
                  </DiscountIconBox>
                ) : null}
              </SubImageBoxPoint>
            )}
          </ProductList>
        );
      })}
    </WrapProductList>
  );
}

const WrapProductList = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  ${CustomMediaStyle.lessThan('mobile')`
  width: 585px;
	`}
`;

const ProductList = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  display: inline-flex;
  margin: 28px 6px;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 10px 6px;
	`}
`;

const SubImageBox = styled.div`
  position: relative;
  padding: 2px;
  background: white;
`;

const SubImageBoxPoint = styled.div`
  position: relative;
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
  padding: 2px;
  border-radius: 18px;
`;

const SubImage = styled.img`
  display: flex;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
`;

const DiscountIconBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 2px;
  right: 8px;
  img {
    width: 25px;
    height: 30px;
  }
`;
const DiscountPrice = styled.span`
  position: absolute;
  z-index: 100;
  right: 0px;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  span {
    padding-left: 0.5px;
    padding-right: 1px;
    font-size: 5px;
  }
`;
