import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                        to="/" 
                        className={({isActive}) =>
                            isActive ? classes.active: undefined
                        }
                        end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/arena" 
                        className={({isActive}) =>
                            isActive ? classes.active: undefined
                        }
                        >
                            Arena
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/games" 
                        className={({isActive}) =>
                            isActive ? classes.active: undefined
                        }
                        >
                            Games
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/users" 
                        className={({isActive}) =>
                            isActive ? classes.active: undefined
                        }
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;