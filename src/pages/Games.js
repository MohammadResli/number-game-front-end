

import {Link} from 'react-router-dom';

const GAMES = [
    {
        id: '1',
        nick_name: 'Test User 1',
    },
    {
        id: '2',
        nick_name: 'Test User 3',
    },
    {
        id: '3',
        nick_name: 'Test User 4',
    },
    {
        id: '4',
        nick_name: 'Test User 4',
    },

];

const GamesPages = () => {
    return (
        <>
        <h1>Games Page.</h1>
        <ul>
            {GAMES.map(game => 
                <li key={game.id}>
                    <Link to={`/games/${game.id}`}>Game player is: {game.nick_name}</Link>
                </li>
            )}
        </ul>
        </>
    );
}

export default GamesPages;