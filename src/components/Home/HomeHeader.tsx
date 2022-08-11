import React from 'react';
import styled from 'styled-components';

function HomeHeader() {
  return (
    <Header>
      <h2>2022.01.12 17:55</h2>
      <h1>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</h1>
      <HashTag>
        #방꾸미기 &nbsp; &nbsp; #우드톤 &nbsp; &nbsp; #화이트 &nbsp; &nbsp;
        #라탄 &nbsp; &nbsp;
      </HashTag>
      <Data>
        <DataTitle>보관함</DataTitle>
        <span>124</span>
        <DataTitle>댓글</DataTitle>
        <span>0</span>
      </Data>
    </Header>
  );
}

const Header = styled.header`
  width: 1300px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    font-size: 10px;
    font-weight: 100;
    color: #646464;
    padding-bottom: 8px;
  }
  h1 {
    font-size: 27px;
    font-weight: 900;
    color: #181d1f;
    padding-bottom: 8px;
    line-height: 40px;
  }
`;

const HashTag = styled.div`
  font-size: 15px;
  color: #646464;
`;

const Data = styled.div`
  margin-top: 15px;
  font-size: 15px;
  span {
    margin-right: 15px;
    font-weight: 400;
  }
`;

const DataTitle = styled.span`
  color: #afafaf;
`;

export default HomeHeader;
