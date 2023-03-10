import {useNavigate } from 'react-router-dom';

import classes from './GameListItem.module.css';

const GameListItem = (props) => {
    const game = props.game;
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/games/'+game.id);
    }
    return (
        <li className={classes.game_item} onClick={navigateHandler}>
            <h4 className={classes.game_item__game_id}>{game.id}</h4>
            <h4 className={classes.game_item__user_name}>{game.user.nick_name}</h4>
            <h4 className={classes.game_item__state}>{game.state}</h4>
        </li>
    );
};

export default GameListItem;