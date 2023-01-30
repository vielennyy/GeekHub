import styled from 'styled-components';

const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 50px;
    }
`

const Nav = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 60px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        flex-direction: row;
      color: #fff;
    }
  }
`;


const Center = styled.div``
const Right = styled.div``

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

export const Navigation = ({ open, setMode, mode }) => {
  return (
    <Nav open={open}>
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
    </Nav>
  )
}
