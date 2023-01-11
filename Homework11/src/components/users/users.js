import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [])

    return (
        <>
            <h1>Users</h1>
            {users.map( user =>
                <div key={user.id}>
                    <Link key={user.id} to={`${user.id}`}>{user.name}</Link>
                </div>
                )}
        </>
    )
}