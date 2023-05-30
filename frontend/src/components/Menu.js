import React from "react";
import styled from "styled-components";
import CloneTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";

const Container = styled.div`
  flex: 1;
  background-color: #0f0f0f;
  color: #f1f1f1;
  height: 100vh;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 20px 30px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={CloneTube} /> CloneTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
