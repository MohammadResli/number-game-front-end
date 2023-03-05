
import {useParams} from 'react-router-dom';


const UserDetailPage = () => {

    const params = useParams();

    return (
        <>
            <h3>User Detail.</h3>
            <p>Welcome {params.userName}</p>
        </>
    );

}

export default UserDetailPage;