
import {useParams} from 'react-router-dom';

const GameDetailPage = () => {

    const params = useParams();

    return (
        <>
            <h3>Game Detail.</h3>
            <p>{params.gameId}</p>
        </>
    );
}

export default GameDetailPage;