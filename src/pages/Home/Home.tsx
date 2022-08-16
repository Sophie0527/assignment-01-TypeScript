import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeFigure from '../../components/Home/HomeFigure';
import HomeProductList from '../../components/Home/HomeProductList';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Home() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [setProductInfo]);

  const [search, setSearch] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSearch = (index: number) => {
    const tmp = [false, false, false, false, false, false, false];
    if (!search[index]) {
      tmp[index] = true;
    }
    setSearch(tmp);
  };

  return (
    <Container>
      <HomeHeader />
      <ViewContent>
        <HomeFigure
          productInfo={productInfo}
          search={search}
          handleSearch={handleSearch}
        />
        <HomeProductList
          productInfo={productInfo}
          search={search}
          handleSearch={handleSearch}
        />
      </ViewContent>
    </Container>
  );
}

const Container = styled.div`
  padding: 110px 0 0 0;
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 80px 0 0 0;
	`}
`;

const ViewContent = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 20px 0;
	`}
`;

export default Home;
