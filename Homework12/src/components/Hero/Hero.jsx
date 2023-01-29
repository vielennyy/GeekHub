import React from 'react'
import { useEffect, useState, useId } from 'react'
import parse from 'html-react-parser';
import styled from 'styled-components';

const Property = styled.div`
    display: block;
`

const HeroWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding: 50px;
`

const userIcon = styled.svg`
    width: 100px;
    height: 100px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 50px;
`

export const Hero = (
    {user}
) => {
    console.log(user)
    const [avatar, setAvatar] = useState([])
    const heroId = useId()


    let avatarId = user.name

    useEffect (() => {
        fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId))
           .then(res => res.text())
            .then(svg => setAvatar(parse(svg)));
    }, []
    )
    
    // console.log(avatar)    

  return (
    <HeroWrapper id={heroId}>
        {/* <userIcon id={heroId}> */}
            {avatar}
            {/* <Icon width='100px' /> */}
        {/* </userIcon> */}
        <UserInfo id={heroId}>
            <Property>{user.name}</Property>
            <Property>Gender: {user.gender}</Property>
            <Property>Height: {user.height}</Property>
            <Property>Mass: {user.mass}</Property>
            <Property>Eye color: {user.eye_color}</Property>
            <Property>Hair color: {user.hair_color}</Property>
        </UserInfo>
    </HeroWrapper>
    )
}
