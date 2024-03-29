import React, { useState } from 'react';
import styled from 'styled-components';
import {Navigation} from './Navigation';

type StyledBurgerProps = {
    open: boolean,
    onClick: Function,
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

type NavbarProps = {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const Burger = ({ setMode, mode}:NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navigation open={open} setMode={setMode} mode={mode}/>
    </>
  )
}