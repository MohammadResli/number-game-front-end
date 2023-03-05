

import {Link, useLoaderData} from 'react-router-dom';


const GamesPages = () => {
    const userData = useLoaderData();

    return (
        <>
        <h1>Games Page.</h1>
        <ul>
            {userData.map(game => 
                <li key={game.id}>
                    <Link to={`/games/${game.id}`}>Game player is: {game.user.nick_name}</Link>
                </li>
            )}
        </ul>
        </>
    );
}

export default GamesPages;


export const GamesLoader  = async () => {
    const response = await fetch('/api/game/games/');
    if(!response.ok){
        //...
    } else {
        return response;
    }
}