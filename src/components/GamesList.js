import GameListItem from "./GameListItem";
import Card from './UI/Card';
import BackIcon from '../assets/BackIcon';
import {useNavigate } from 'react-router-dom';
import classes from './GamesList.module.css';

const GamesList = (props) => {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate('..');
    }
    const gamesList = props.games.map( (game)=>(
        <GameListItem key={game.id} game={game}/>
    ));
    return (
        <section className={classes.games}>
            <div className={classes.games__label}>
                <button className={classes.games__button} onClick={backHandler}>
                <BackIcon />
                </button>
                <h1>All Games</h1>
            </div>
            <Card>
                <div className={classes.games__header}>
                    <h3 className={classes.games__header_game_id}>Id</h3>
                    <h3 className={classes.games__header_game_player}>Player</h3>
                    <h3 className={classes.games__header_game_state}>State</h3>
                </div>
                <ul>
                    {gamesList}
                </ul>
            </Card>
        </section>
    );
};

export default GamesList;