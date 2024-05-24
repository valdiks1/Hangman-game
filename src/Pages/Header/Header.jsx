import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/game">Game</NavLink></li>
                    <li><NavLink to="/admin">Admin Panel</NavLink></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Header;