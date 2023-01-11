import './header.css';
import { useLocation, useNavigate, useMatches } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);

    return (
        <header className='Header'>
            {<div onClick={goBack}>Back</div>}
            {<div onClick={goForward}>Forward</div>}
        </header>
    )
};