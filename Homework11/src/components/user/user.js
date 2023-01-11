import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Todos } from "../todos/todos";

export const User = () => {
    const [user, setUser] = useState([]);

    // const [todos, setTodos] = useState([]);

    const {id} = useParams();

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => {setUser(json)});
    }, [])

    // useEffect( () => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    //         .then((response) => response.json())
    //         .then((json) => {setTodos(json)});
    // }, [])
    // setUser(json)

    return (
        <>
            <h1>User</h1>
            <h2>{user.name}</h2>
            {/* TODO: add short information about user */}
            <Todos id = {user.id}/>
            {/* {JSON.stringify(user)} */}
            {/* TODO: show user todos in an apropriate way */}
            {/* {JSON.stringify(todos)} */}
            {/* {users.map( user =>
                <div key={user.id}>
                    <Link key={user.id} to={`${user.id}`}>{user.name}</Link>
                </div>
                )} */}
        </>
    )
}