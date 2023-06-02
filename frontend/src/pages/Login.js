import axios from "axios";
import React, { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 1px solid ${({ theme }) => theme.textSoft};
  padding: 20px 50px;
  gap: 10px;
  box-shadow: 1px 1px 39px -19px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 1px 1px 39px -19px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 1px 1px 39px -19px rgba(0, 0, 0, 0.52);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.textSoft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;

  &:focus {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bgLighter};
  }

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bgLighter};
  }
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    loginErrors: {},
    registerErrors: {},
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signin", { name, password });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        {/* LOGIN SECTION */}
        <Title>Sign in</Title>
        <SubTitle>to continue to CloneTube</SubTitle>
        <Input
          placeholder="username"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>

        {/* REGISTER SECTION */}
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Login;
