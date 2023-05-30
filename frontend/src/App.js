import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: red;
`;

const Wrapper = styled.div``;
function App() {
  return (
    <Container>
      {/* Menu */}
      <Menu />
      {/* Main */}
      <Main>
        <Navbar />
        <Wrapper>Video cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
