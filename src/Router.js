import {createBrowserRouter} from 'react-router-dom';


import GameArenaPage from './pages/GameArena';
import GamesPages from './pages/Games';
import HomePage from './pages/Home';
import LoginPage from './pages/LogIn';
import ProfilePage from './pages/Profile';
import SignUpPage from './pages/SignUp';
import UsersPage from './pages/Users';


const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/games', element: <GamesPages/>},
    {path: '/users', element: <UsersPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignUpPage/>},
    {path: '/profile', element: <ProfilePage/>},
    {path: '/arena', element: <GameArenaPage/>},
  ]);

export default router;