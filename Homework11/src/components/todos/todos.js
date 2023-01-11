import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Todos = (props) => {

    const [todos, setTodos] = useState([]);

    const {id} = useParams();

    console.log(id)


    useEffect( () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
                .then((response) => response.json())
                .then((json) => {console.log(json); setTodos(json)});
        }, [])

    return (
        <>
            <h1>Todos</h1>
            {todos.map( todo =>
                <div key={todo.id}>
                    <Link key={todo.id} to={`/user/${props.id}/todo/${todo.id}`}>{todo.title}</Link>
                </div>
                )}
        </>
    )
}