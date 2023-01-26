import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero"

const GlobalStyles = createGlobalStyle`
  body{
    background-color: white;
  }
`

const Container = styled.div`
  background-color: white;
  height: 100vh;
`

function App() {

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <GlobalStyles />
        <Container>
          <Navbar />
          <Hero />
        </Container>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
