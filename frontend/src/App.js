import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;
function App() {
  // Set initial theme, default darkMode === true
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        {/* Menu */}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* Main */}
        <Main>
          <Navbar />
          <Wrapper></Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
