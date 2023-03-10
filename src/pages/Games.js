

import {useLoaderData} from 'react-router-dom';

import GamesList from '../components/GamesList';
const GamesPages = () => {
    const userData = useLoaderData();
    return (
        <GamesList games={userData}/>
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