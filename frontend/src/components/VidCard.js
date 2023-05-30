import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
  /* background-color: red; */
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VidCard = () => {
  return (
    <Container>
      <Image src="https://i3.ytimg.com/vi/DgljVIpMrbE/maxresdefault.jpg" />
      <Details>
        <ChannelImage src="https://yt3.ggpht.com/SMHmQVpzLs0uL7728eQfYp4auW_-Gy5eWjF1knpd11TSu68Y_0C1RFzP8G_HzUL6wXSjwPvZ=s68-c-k-c0x00ffffff-no-rj" />
        <Text>
          <Title>Test Video</Title>
          <ChannelName>CloneTube</ChannelName>
          <Info>100,000 views ⦁ 1 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
};

export default VidCard;
