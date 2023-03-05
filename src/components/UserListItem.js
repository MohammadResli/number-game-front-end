import {useNavigate } from 'react-router-dom';

import classes from './UserListItem.module.css';

const UserListItem = (props) => {

    const user = props.user;
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/users/'+user.user_name);
    }
    return (
        <li className={classes.user_item} onClick={navigateHandler}>
            <h4 className={classes.user_item__user_name}>{user.nick_name}</h4>
            <h4 className={classes.user_item__rating}>{user.rating}</h4>
            <h4 className={classes.user_item__game_count}>{user.games_count}</h4>
        </li>
    );
}

export default UserListItem;