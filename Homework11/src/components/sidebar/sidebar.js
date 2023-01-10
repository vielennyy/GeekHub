import { Link, NavLink } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/user">User</Link>

        </div>
    )
}