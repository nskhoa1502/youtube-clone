import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  position: relative;
  /* cursor: pointer; */
`;
const Close = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: red;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
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

const Desc = styled.textarea``;

const Label = styled.label`
  font-size: 14px;
`;

const Upload = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    console.log(`clicked`);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={handleClose}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video:</Label>
        <Input type="file" accept="video/*" />
        <Input type="text" placeholder="Title" />
        <Desc placeholder="Description" rows="8" />
        <Input type="text" placeholder="Separate the tags with commas." />
        <Label>Image:</Label>
        <Input type="file" accept="image/*" />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
