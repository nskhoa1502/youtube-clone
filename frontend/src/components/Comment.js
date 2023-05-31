import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/SMHmQVpzLs0uL7728eQfYp4auW_-Gy5eWjF1knpd11TSu68Y_0C1RFzP8G_HzUL6wXSjwPvZ=s68-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          Asmongold <Date>1 day ago</Date>
        </Name>
        <Text>
          Tempor nulla adipisicing exercitation est excepteur sunt aliquip elit
          mollit consectetur eiusmod non. Commodo esse anim amet sit mollit
          culpa sunt esse labore pariatur. Do veniam incididunt ad in. Nisi sit
          culpa consectetur voluptate. Ullamco ad eu consectetur proident esse.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
