
import {useParams, Link} from 'react-router-dom';


const UserDetailPage = () => {

    const params = useParams();

    return (
        <>
            <h3>User Detail.</h3>
            <p>Welcome {params.userName}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );

}

export default UserDetailPage;