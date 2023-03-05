
import {useParams, Link} from 'react-router-dom';

const GameDetailPage = () => {

    const params = useParams();

    return (
        <>
            <h3>Game Detail.</h3>
            <p>{params.gameId}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );
}

export default GameDetailPage;