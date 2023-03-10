import { redirect } from "react-router-dom";

const LogOutAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return redirect('/');
};

export default LogOutAction;