import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16px;
  margin-left: 12px;
`

const HeaderText = styled.div`
  font-size: 16px;
  font-family: "PretendardBold";
  line-height: 16px;
  word-wrap: break-word;
  margin-bottom: 8px;
`

const SubText = styled.div`
  color: #636366;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-height: 20px;
  word-wrap: break-word;
`

function EmotionRankHeader() {
  return (
    <Header>
      <HeaderText>
        가장 많이 남긴 감정
      </HeaderText>
      <SubText>
        카테고리별로 많이 남긴 감정을 볼 수 있어요.
      </SubText>
    </Header>
  )
}

export default EmotionRankHeader;