import React, {useState} from 'react';
import { Hero } from './conponents/Hero/Hero';
import { List } from './conponents/List/List';
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { Navbar } from './conponents/Navbar/Navbar';

function App() {
  const [mode, setMode] = useState<boolean>(false);

  const GlobalStyles = createGlobalStyle<props>`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: ${(props) => props.theme.background};
  }
`

type DefaultTheme = {
  background:string,
  link:string,
  text:string,
}

type props = {
  theme:DefaultTheme,
}

const Container = styled.div`
  background-color: white;
  height: 100vh;
`

const theme:DefaultTheme = {
  background: '#fff',
  link: 'gray',
  text: '#000',
}

const darktheme:DefaultTheme = {
  background: '#000',
  link: 'gray',
  text: '#fff',
}

  return (
    <>
      <ThemeProvider theme ={mode ? darktheme : theme}>
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
