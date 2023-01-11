import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, [])

    return (
        <>
            <h1>All Todos</h1>
            {todos.map( todo =>
                <div key={todo.id}>
                    <Link key={todo.id} to={`${todo.id}`}>{todo.title}</Link>
                </div>
                )}
        </>
    )
}