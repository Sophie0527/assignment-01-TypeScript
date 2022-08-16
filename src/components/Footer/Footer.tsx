import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Footer() {
  return (
    <Container>
      <Owner>
        <OwnerProfile>
          <img
            src="//cdn.ggumim.co.kr/storage/20220315122950yeg0WL7VaB.png"
            alt="profile"
          />
        </OwnerProfile>
        <OwnerName>sysysyning</OwnerName>
        <OwnerSNS>
          <img
            src="//cdn.ggumim.co.kr/storage/202202151721086LuWpRcD0t.png"
            alt="SNS"
          />
        </OwnerSNS>
      </Owner>
      <Comment>
        <CommentWrite onClick={() => alert('로그인이 필요합니다.')}>
          <Input>@닉네임으로 태그하여 댓글을 남겨보세요</Input>
          <Submit>등록</Submit>
        </CommentWrite>
      </Comment>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  background-color: #fafafa;
  padding: 20px 0 40px 0;
  position: relative;
`;

const Owner = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const OwnerProfile = styled.div`
  text-align: center;
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 1px solid #e9ebee;
  }
`;

const OwnerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  color: #333c45;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.002em;
`;

const OwnerSNS = styled.div`
  text-align: center;
  padding-top: 8px;
  img {
    width: 32px;
    height: 32px;
  }
`;

const Comment = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const CommentWrite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 505px;
  height: 42px;
  border: 1px solid #c5c8ce;
  border-radius: 6px;
  color: #333c45;
  font-size: 15px;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('mobile')`
  width: 400px;
	`}
`;

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333c45;
  width: 72px;
  height: 42px;
  border-radius: 6px;
  margin-left: 8px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export default Footer;
