import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Erorr';

import GameArenaPage from './pages/GameArena';
import GameDetailPage from './pages/GameDetail';
import GamesPages from './pages/Games';
import HomePage from './pages/Home';
import LoginPage from './pages/LogIn';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import SignUpPage from './pages/SignUp';
import UserDetailPage from './pages/UserDetail';
import UsersPage from './pages/Users';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/games', element: <GamesPages /> },
            { path: '/games/:gameId', element: <GameDetailPage/> },
            { path: '/users', element: <UsersPage /> },
            { path: '/users/:userName', element: <UserDetailPage/> },
            { path: '/login', element: <LoginPage /> },
            { path: '/signup', element: <SignUpPage /> },
            { path: '/profile', element: <ProfilePage /> },
            { path: '/arena', element: <GameArenaPage /> },
        ],
    },
]);

export default router;