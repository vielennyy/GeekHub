import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Todo = () => {
    const [todo, setTodo] = useState([]);

    const {id} = useParams();

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users/1/todos?id=${id}`)
            .then((response) => response.json())
            .then((json) => setTodo(json));
    }, [])

    return (
        <>
            <h1>Todo</h1>
            {JSON.stringify(todo)}
            {/* {users.map( user =>
                <div key={user.id}>
                    <Link key={user.id} to={`/${user.id}`}>{user.name}</Link>
                </div>
                )} */}
        </>
    )
}