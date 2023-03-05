
import {Link} from 'react-router-dom';

const USERS = [
    {
        user_name: 'testuser1',
        nick_name: 'Test User 1',
    },
    {
        user_name: 'testuser2',
        nick_name: 'Test User 2',
    },
    {
        user_name: 'testuser3',
        nick_name: 'Test User 3',
    },
    {
        user_name: 'testuser4',
        nick_name: 'Test User 4',
    },

];

const UsersPage = () => {
    return (
        <>
        <h1>Users Page.</h1>
        <ul>
            {USERS.map(user => 
                <li key={user.user_name}>
                    <Link to={`/users/${user.user_name}`}>{user.nick_name}</Link>
                </li>
            )}
        </ul>
        </>
    );
}

export default UsersPage;