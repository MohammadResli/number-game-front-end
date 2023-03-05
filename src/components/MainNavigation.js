import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/arena">Arena</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;