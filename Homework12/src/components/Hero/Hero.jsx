import React from 'react'
import { useEffect, useState } from 'react'

export const Hero = () => {
    const [users, setUsers] = useState([])
    const [avatar, setAvatar] = useState([])

    let avatarId = 'Binx Bond'
    // fetch('https://api.multiavatar.com/'
    // +JSON.stringify(avatarId))
    // .then(res => res.text())
    // .then(svg => console.log(svg))

    // useEffect (() => {
    //     fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId))
    //        .then(res => res.text())
    //         .then(svg => setAvatar(svg));
    // }, []
    // )
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [])

  return (
    <div>{users.map( user =>
        <div>
            <div >{user.name}</div>
        </div>
        )}</div>
  )
}
