import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Erorr';

import GameArenaPage from './pages/GameArena';
import GameDetailPage ,{GameDetailLoader} from './pages/GameDetail';
import GamesPages, {GamesLoader} from './pages/Games';
import HomePage from './pages/Home';
import LoginPage ,{LoginAction} from './pages/LogIn';
import LogOutAction from './pages/LogOut';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import SignUpPage ,{SignUpAction}from './pages/SignUp';
import UserDetailPage, {UserDetailLoader} from './pages/UserDetail';
import UsersPage, {UsersLoader} from './pages/Users';
import TokenLoader from './Util/Auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        id: 'root',
        loader: TokenLoader,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/games', element: <GamesPages />, loader: GamesLoader},
            { path: '/games/:gameId', element: <GameDetailPage/>, loader:GameDetailLoader },
            { path: '/users', element: <UsersPage />,loader: UsersLoader },
            { path: '/users/:userName', element: <UserDetailPage/>,loader:UserDetailLoader},
            { path: '/login', element: <LoginPage /> ,action: LoginAction},
            { path: '/signup', element: <SignUpPage />, action: SignUpAction },
            { path: '/profile', element: <ProfilePage /> },
            { path: '/arena', element: <GameArenaPage /> },
            {path: '/logout', action: LogOutAction}
        ],
    },
]);

export default router;