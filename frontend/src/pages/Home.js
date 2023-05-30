import React from "react";
import styled from "styled-components";
import VidCard from "../components/VidCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
      <VidCard />
    </Container>
  );
};

export default Home;
