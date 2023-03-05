
import {useLoaderData} from 'react-router-dom';
import UsersList from '../components/UsersList';

const UsersPage = () => {
    const userData = useLoaderData();
    return (
        <UsersList users={userData}/>
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