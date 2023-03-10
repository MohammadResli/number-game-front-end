
import {useLoaderData, Link} from 'react-router-dom';

const GameDetailPage = () => {

    const gameDetail = useLoaderData();

    return (
        <>
            <h3>Game Detail.</h3>
            <p>{gameDetail.id}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );
}

export default GameDetailPage;

export const GameDetailLoader  = async ({request, params}) => {
    const game_id = params.gameId;
    const response = await fetch('/api/game/games/'+game_id);
    if(!response.ok){
        //...
    } else {
        return response;
    }
}