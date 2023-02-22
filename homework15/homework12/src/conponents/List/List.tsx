import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Hero, User } from '../Hero/Hero'

const HeroContainer = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-size: 16px;
`

export const List = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((json) => {
                console.log(json.results)
                setUsers(json.results)
            });
    }, [])

  return (
    <HeroContainer>
        {users.map( (user:User) => (
            <Hero user = {user}/>
        )
        )}
    </HeroContainer>
  )
}
