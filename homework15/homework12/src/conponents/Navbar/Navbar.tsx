import React from "react"
import styled from "styled-components"
import { Burger } from "../Burger/Burger"

const Container = styled.div`
    width: 100%;
    height: 10%;
    background-color: ${(props) => props.theme.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

const Left = styled.div``


const Logo = styled.h1`
    font-size: 30px;
    text-decoration: underline;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    margin: 50px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 50%;
`

type NavbarProps = {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const Navbar = ({ mode, setMode }:NavbarProps) => {
    return <Container>
        <Left>
            <Logo>SW</Logo>
        </Left>
        {/* <Center>
            <Menu>
                <MenuItem>Docs</MenuItem>
                <MenuItem>Contacts</MenuItem>
                <MenuItem>About us</MenuItem>
                <MenuItem>Blog</MenuItem>
            </Menu>
        </Center>
        <Right>
            <Button onClick={() => setMode(!mode)}>Light/Dark</Button>
        </Right> */}
        <Burger setMode={setMode} mode={mode}/>
    </Container>
}