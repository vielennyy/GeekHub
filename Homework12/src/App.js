import { useState } from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List"

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${(props) => props.theme.background};
  }
`

const Container = styled.div`
  background-color: white;
  height: 100vh;
`
const theme = {
  background: '#fff',
  link: 'gray',
  text: '#000',
}

const darktheme = {
  background: '#000',
  link: 'gray',
  text: '#fff',
}

function App() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={mode ? darktheme : theme}>
        <GlobalStyles />

        <Container>
          <Navbar setMode={setMode} mode={mode}/>
          <List />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
