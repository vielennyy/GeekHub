// import { Link, NavLink } from 'react-router-dom';
import './sidebar.css';

// export const Sidebar = () => {
//     return (
//         <div className='sidebar'>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/user">User</Link>

//         </div>
//     )
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [])

    return (
        <>
            <div className='sidebar'>
                <h1>Users</h1>

                {users.map( user =>
                    <div key={user.id}>
                        <Link key={user.id} to={`/user/${user.id}`} reloadDocument>{user.name}</Link>
                    </div>
                    )}
            </div>
            
        </>
    )
}