
import {Link, useLoaderData} from 'react-router-dom';


const UserDetailPage = () => {
    const userDetail = useLoaderData();
    return (
        <>
            <h3>User Detail.</h3>
            <p>Welcome {userDetail.nick_name}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );

}

export default UserDetailPage;

export const UserDetailLoader  = async ({request, params}) => {
    const user_name = params.userName;
    const response = await fetch('/api/user/users/'+user_name);
    if(!response.ok){
        //...
    } else {
        return response;
    }
}