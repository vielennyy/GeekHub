import React from "react"
import styled from "styled-components"

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
const Center = styled.div``
const Right = styled.div``

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

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    font-size: 20px;
    font-weight: bold;
    margin-right: 30px;
    color: ${(props) => props.theme.link};
    cursor: pointer;
    &:hover{
        color: ${(props) => props.theme.text};
    }
`

const Button = styled.button `
    font-weight: bold;
    background-color: ${(props) => props.theme.text};
    border: 2px solid white;
    cursor: pointer;
    color: ${(props) => props.theme.background};
    padding: 10px 10px;
    margin: 50px;
    border-radius: 10px;
    &:hover {
        background-color: aliceblue;
        color: ${(props) => props.theme.link};
        border: 2px solid ${(props) => props.theme.link}; 
    }
`

export const Navbar = ({ mode, setMode }) => {
    return <Container>
        <Left>
            <Logo>SW</Logo>
        </Left>
        <Center>
            <Menu>
                <MenuItem>Docs</MenuItem>
                <MenuItem>Contacts</MenuItem>
                <MenuItem>About us</MenuItem>
                <MenuItem>Blog</MenuItem>
            </Menu>
        </Center>
        <Right>
            <Button onClick={() => setMode(!mode)}>Light/Dark</Button>
        </Right>
    </Container>
}