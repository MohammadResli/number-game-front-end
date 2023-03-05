
import {Link, useLoaderData} from 'react-router-dom';

const UsersPage = () => {
    const userData = useLoaderData();
    return (
        <>
        <h1>Users Page.</h1>
        <ul>
            {userData.map(user => 
                <li key={user.user_name}>
                    <Link to={`/users/${user.user_name}`}>{user.user_name}</Link>
                </li>
            )}
        </ul>
        </>
    );
}

export default UsersPage;

export const UsersLoader  = async () => {
    const response = await fetch('/api/user/users/');
    if(!response.ok){
        //...
    } else {
        return response;
    }
}