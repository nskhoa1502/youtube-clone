import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); //60px is the height of navbar
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1``;

const SubTitle = styled.h2;

const Login = () => {
  return (
    <Container>
      <Wrapper>Logindasdfaslkdfjsldkf</Wrapper>
    </Container>
  );
};

export default Login;
