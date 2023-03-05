import UserListItem from './UserListItem';
import classes from './UsersList.module.css';
import Card from './UI/Card';
import BackIcon from '../assets/BackIcon';
import {useNavigate } from 'react-router-dom';

const UsersList = (props) => {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate('..');
    }

    const usersList = props.users.map((user) =>(
        <UserListItem
            key={user.user_name}
            user={user}
        />
    ));
    
    return (
        <section className={classes.users}>
            <div className={classes.users__label}>
                <button className={classes.users__button} onClick={backHandler}>
                <BackIcon />
                </button>
                <h1>All Users</h1>
            </div>
            <Card>
                <div className={classes.users__header}>
                    <h3 className={classes.users__header_player}>Player</h3>
                    <h3 className={classes.users__header_rating}>Rating</h3>
                    <h3 className={classes.users__header_game_count}>Games</h3>
                </div>
                <ul>{usersList}</ul>
            </Card>
        </section>
    );
}

export default UsersList;