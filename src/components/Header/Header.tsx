import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <HeaderBox>
        <Link to="/">
          <img
            src="https://cdn.ggumim.co.kr/storage/202204051459171AgPRwqnvh.png"
            alt="logo"
          />
        </Link>
        <ul>
          <Category>
            <img
              src="https://cdn.ggumim.co.kr/storage/202204051459052q2QRSpTV9.png"
              alt="icon"
            />
            <span>카테고리</span>
          </Category>
          <Line />
          <Menu>
            <span>스토어</span>
            <span>컨텐츠</span>
            <span>커뮤니티</span>
          </Menu>
        </ul>
        <HeaderRight>
          <BookMarkIcon>
            <img
              src="https://cdn.ggumim.co.kr/storage/20220322174239CIcDjjxrHl.png"
              alt="bookmark-icon"
            />
          </BookMarkIcon>
          <CartIcon>
            <img
              src="https://cdn.ggumim.co.kr/storage/20220405154434B4uwWl2qr6.png"
              alt="cart-icon"
            />
          </CartIcon>
        </HeaderRight>
      </HeaderBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  width: 1240px;
  height: 68px;
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Spoqa Han Sans';
  -webkit-font-smoothing: antialiased;
  img {
    margin: 0 23px 0 0;
    width: 148px;
    height: 36px;
  }
  ul {
    height: 68px;
    display: flex;
    align-items: center;
  }
`;

const Category = styled.li`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin: 0 0 2px 2px;
    cursor: pointer;
  }
  span {
    color: #181d1f;
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 2px 6px;
  }
`;

const Line = styled.li`
  margin: 0 4px 0 24px;
  width: 1px;
  height: 16px;
  list-style: none;
  background: #c5c8ce;
`;

const Menu = styled.li`
  height: 68px;
  justify-content: center;
  display: flex;
  align-items: center;
  span {
    color: #181d1f;
    font-size: 17px;
    font-weight: 700;
    padding: 0 20px;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  margin-left: auto;
`;

const BookMarkIcon = styled.div`
  position: relative;
  padding: 0 16px 0 4px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
  }
`;

const CartIcon = styled.div`
  position: relative;
  padding: 0 27px 0 0;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
  }
`;

export default Header;
