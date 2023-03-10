import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';
import getAuthToken, {getAuthUser} from '../Util/Auth';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const token = useRouteLoaderData('root');
    let authHeader = 
    <ul className={classes.list}> 
        <li>
            <NavLink 
                to="/login" 
                className={({isActive}) =>
                    isActive ? classes.active: undefined
                }
            >SIGN IN</NavLink>
        </li>
        <li>
            <NavLink 
                to="/signup" 
                className={({isActive}) =>
                    isActive ? classes.active: undefined
                }
                >SIGN UP</NavLink>
        </li>
    </ul>;
    if(token){
        authHeader = 
        <ul className={classes.list}> 
            <li>
            <NavLink
                to="/profile" 
                className={({isActive}) =>
                    isActive ? classes.active: undefined
                }
                >{getAuthUser()}</NavLink>
            </li>
            <li>
                <Form action='/logout' method='post'>
                    <button>Logout</button>
                </Form>
            </li>
        </ul>;
    }

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
            {authHeader}
        </header>
    );
}

export default MainNavigation;